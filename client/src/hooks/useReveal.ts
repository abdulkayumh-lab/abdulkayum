import { useEffect } from "react";

/**
 * Global scroll-reveal driver.
 * Any element with the `.reveal` class fades/slides in when it enters the viewport.
 * Optional stagger via style={{ "--reveal-delay": "120ms" }}.
 */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const attach = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)").forEach(el => observer.observe(el));
    };
    attach();

    // Re-attach for late-mounted nodes
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);
}
