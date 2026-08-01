"use client";

import { useEffect, useRef, useState } from "react";

export function MouseFollower() {
  const followerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      posRef.current.x = lerp(posRef.current.x, targetRef.current.x, 0.12);
      posRef.current.y = lerp(posRef.current.y, targetRef.current.y, 0.12);

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${posRef.current.x - 200}px, ${posRef.current.y - 200}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        width: 400,
        height: 400,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.4s ease",
      }}
    >
      <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(79,110,247,0.12)_0%,rgba(99,102,241,0.06)_35%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(79,110,247,0.08)_0%,rgba(99,102,241,0.04)_35%,transparent_70%)]" />
    </div>
  );
}
