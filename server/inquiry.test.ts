import { describe, expect, it, vi, beforeEach } from "vitest";
import type { TrpcContext } from "./_core/context";

const createInquiryMock = vi.fn();
const notifyOwnerMock = vi.fn();

vi.mock("./db", async importOriginal => {
  const actual = await importOriginal<typeof import("./db")>();
  return {
    ...actual,
    createInquiry: (...args: unknown[]) => createInquiryMock(...args),
    listInquiries: vi.fn().mockResolvedValue([]),
  };
});

vi.mock("./_core/notification", () => ({
  notifyOwner: (...args: unknown[]) => notifyOwnerMock(...args),
}));

import { appRouter } from "./routers";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: { clearCookie: () => {} } as unknown as TrpcContext["res"],
  };
}

describe("inquiry.submit", () => {
  beforeEach(() => {
    createInquiryMock.mockReset().mockResolvedValue(undefined);
    notifyOwnerMock.mockReset().mockResolvedValue(undefined);
  });

  it("stores a valid inquiry and notifies the owner", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.inquiry.submit({
      name: "Jane Client",
      email: "jane@example.com",
      projectType: "Visual identity",
      message: "I'd love a cinematic rebrand for my startup.",
    });

    expect(result).toEqual({ success: true });
    expect(createInquiryMock).toHaveBeenCalledWith({
      name: "Jane Client",
      email: "jane@example.com",
      projectType: "Visual identity",
      message: "I'd love a cinematic rebrand for my startup.",
    });
    expect(notifyOwnerMock).toHaveBeenCalledOnce();
  });

  it("rejects an invalid email", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.inquiry.submit({
        name: "Jane",
        email: "not-an-email",
        projectType: "",
        message: "Hello",
      })
    ).rejects.toThrow();
    expect(createInquiryMock).not.toHaveBeenCalled();
  });

  it("rejects an empty message", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    await expect(
      caller.inquiry.submit({
        name: "Jane",
        email: "jane@example.com",
        projectType: "",
        message: "   ",
      })
    ).rejects.toThrow();
    expect(createInquiryMock).not.toHaveBeenCalled();
  });

  it("still succeeds when owner notification fails", async () => {
    notifyOwnerMock.mockRejectedValueOnce(new Error("notify down"));
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.inquiry.submit({
      name: "Sam",
      email: "sam@example.com",
      projectType: "Infographics",
      message: "Need an infographic system.",
    });
    expect(result).toEqual({ success: true });
  });
});
