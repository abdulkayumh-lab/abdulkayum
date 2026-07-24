import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { notifyOwner } from "./_core/notification";
import { systemRouter } from "./_core/systemRouter";
import { protectedProcedure, publicProcedure, router } from "./_core/trpc";
import { createInquiry, listInquiries } from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  inquiry: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().trim().min(1, "Name is required").max(120),
          email: z.string().trim().email("A valid email is required").max(320),
          projectType: z.string().trim().max(200).optional().default(""),
          message: z.string().trim().min(1, "Message is required").max(5000),
        })
      )
      .mutation(async ({ input }) => {
        await createInquiry({
          name: input.name,
          email: input.email,
          projectType: input.projectType || null,
          message: input.message,
        });
        // Best-effort owner notification; never block the user on failure.
        try {
          await notifyOwner({
            title: `New freelance inquiry from ${input.name}`,
            content: `Email: ${input.email}\nProject: ${input.projectType || "N/A"}\n\n${input.message}`,
          });
        } catch (err) {
          console.warn("[Inquiry] Owner notification failed:", err);
        }
        return { success: true } as const;
      }),
    list: protectedProcedure.query(() => listInquiries()),
  }),
});

export type AppRouter = typeof appRouter;
