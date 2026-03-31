/** Shared decorative SVG elements for visual richness */

export function WaveDivider({
  color = "#FAF7F2",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-[50px] md:h-[80px]"
      >
        <path
          d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,30 1440,40 L1440,100 L0,100 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function WaveDividerAlt({
  color = "#FFFFFF",
  flip = false,
  className = "",
}: {
  color?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M0,20 Q360,80 720,30 T1440,50 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function FloatingShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large teal circle top-right */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-teal/10 rounded-full animate-float-slow" />
      {/* Small orange circle left */}
      <div className="absolute top-1/3 -left-10 w-40 h-40 bg-orange/10 rounded-full animate-float-reverse" />
      {/* Medium teal blob bottom-right */}
      <div className="absolute -bottom-10 right-1/4 w-56 h-56 bg-teal/5 rounded-full animate-float" />
      {/* Tiny accent dot */}
      <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-orange/20 rounded-full animate-pulse-soft" />
      <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-teal/25 rounded-full animate-pulse-soft" />
    </div>
  );
}

export function DotPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none bg-dot-pattern ${className}`}
      aria-hidden="true"
    />
  );
}

export function DotPatternLight({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none bg-dot-pattern-light ${className}`}
      aria-hidden="true"
    />
  );
}

export function BlobAccent({
  position = "top-right",
  color = "teal",
  size = "lg",
}: {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center-left" | "center-right";
  color?: "teal" | "orange" | "navy";
  size?: "sm" | "md" | "lg";
}) {
  const positionClasses = {
    "top-right": "-top-16 -right-16",
    "top-left": "-top-16 -left-16",
    "bottom-right": "-bottom-16 -right-16",
    "bottom-left": "-bottom-16 -left-16",
    "center-left": "top-1/2 -translate-y-1/2 -left-24",
    "center-right": "top-1/2 -translate-y-1/2 -right-24",
  };

  const colorClasses = {
    teal: "bg-teal/8",
    orange: "bg-orange/8",
    navy: "bg-navy/8",
  };

  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-56 h-56",
    lg: "w-80 h-80",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${colorClasses[color]} rounded-full blur-3xl pointer-events-none`}
      aria-hidden="true"
    />
  );
}
