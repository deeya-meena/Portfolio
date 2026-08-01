"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setTilt({
      rotateX: (0.5 - y) * maxTilt * 2,
      rotateY: (x - 0.5) * maxTilt * 2,
    });

    setGlarePos({ x: x * 100, y: y * 100 });
  };

  const handleMouseEnter = () => setIsHovering(true);

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlarePos({ x: 50, y: 50 });
  };

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      style={{ perspective: "1000px" }}
      className={className}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative"
      >
        {children}

        {/* Glare Overlay */}
        {glare && isHovering && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none z-10 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
              opacity: isHovering ? 1 : 0,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
