"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Arah datang elemen sebelum settle ke posisi akhir. */
  direction?: "up" | "left" | "none";
  /** Delay tampil dalam ms — dipakai untuk efek stagger antar elemen. */
  delay?: number;
  /** Hanya animasikan sekali (default true). */
  once?: boolean;
  as?: "div" | "span";
}

/**
 * Reveal-on-scroll murni lewat CSS transition + IntersectionObserver bawaan browser.
 * Sengaja TIDAK memakai Framer Motion's value-tweening (initial/animate numerik)
 * untuk opacity supaya tidak bergantung pada animation engine pihak ketiga untuk
 * hal yang sebenarnya bisa native CSS — lebih ringan dan lebih predictable.
 */
export default function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  once = true,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "-40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const hiddenTransform =
    direction === "up" ? "translate-y-6" : direction === "left" ? "-translate-x-4" : "";

  const Comp = as;

  return (
    <Comp
      ref={ref as never}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${hiddenTransform}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
