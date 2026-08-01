"use client";

interface SectionDividerProps {
  variant?: "wave" | "slope" | "curve";
  flip?: boolean;
  className?: string;
}

export function SectionDivider({
  variant = "wave",
  flip = false,
  className = "",
}: SectionDividerProps) {
  const transforms = flip ? "rotate(180deg)" : "none";

  const paths: Record<string, string> = {
    wave: "M0,64 C320,120 640,0 960,64 C1280,128 1600,0 1920,64 L1920,160 L0,160 Z",
    slope: "M0,128 L960,32 L1920,128 L1920,160 L0,160 Z",
    curve: "M0,96 Q480,0 960,96 T1920,96 L1920,160 L0,160 Z",
  };

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] pointer-events-none ${className}`}
      style={{ transform: transforms }}
    >
      <svg
        viewBox="0 0 1920 160"
        preserveAspectRatio="none"
        className="relative block w-full h-16 sm:h-20 md:h-24"
      >
        <defs>
          <linearGradient id={`divider-grad-${variant}-${flip}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(79,110,247,0.08)" />
            <stop offset="50%" stopColor="rgba(99,102,241,0.12)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.08)" />
          </linearGradient>
        </defs>
        <path
          d={paths[variant]}
          fill={`url(#divider-grad-${variant}-${flip})`}
          className="section-divider-path"
        />
      </svg>
    </div>
  );
}
