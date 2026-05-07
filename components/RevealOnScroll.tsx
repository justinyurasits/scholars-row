"use client";

import { useEffect, useRef } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}

export function RevealOnScroll({
  children,
  className = "",
  as: Tag = "div",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // @ts-expect-error -- dynamic tag with ref
  return <Tag ref={ref} className={`reveal ${className}`.trim()}>{children}</Tag>;
}
