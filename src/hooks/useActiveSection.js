import { useEffect, useState } from "react";

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const ids = sectionIds.filter(Boolean);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 8;

        if (isAtBottom) {
          setActive(ids[ids.length - 1]);
          return;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Ensure an initial active value on mount (deferred to avoid
    // synchronous setState inside the effect body).
    const timeoutId = setTimeout(() => {
      const initial = elements.find((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.3 && rect.bottom > 0;
      });
      if (initial) setActive(initial.id);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [sectionIds]);

  return active;
}
