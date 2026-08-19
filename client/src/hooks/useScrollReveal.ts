import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 160px 0px" }
    );

    const register = (el: HTMLElement) => {
      // Already visible on load — show immediately without waiting for scroll
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("show");
      } else {
        io.observe(el);
      }
    };

    // Observe elements present at mount
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(register);

    // Re-observe elements added by route changes (React Router swaps page content)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.hasAttribute("data-reveal")) register(node);
          node.querySelectorAll<HTMLElement>("[data-reveal]").forEach(register);
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
};

export default useScrollReveal;
