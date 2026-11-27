import { useEffect, useRef, type ReactNode } from "react";

export default function ScrollSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section || typeof IntersectionObserver === "undefined" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      section.classList.add("section-reveal");
      observer.disconnect();
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
