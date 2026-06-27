import React from "react";

// Stylized hooded figure (back view) — taller, more angular hood
export default function HoodedFigure() {
  return (
    <svg
      viewBox="0 0 400 600"
      preserveAspectRatio="xMidYMax meet"
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "92%",
        height: "100%",
        zIndex: 2,
      }}
    >
      <defs>
        <linearGradient id="hoodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="55%" stopColor="#040404" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <radialGradient id="rimLightR" cx="80%" cy="30%" r="40%">
          <stop offset="0%" stopColor="rgba(57, 255, 20, 0.12)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="rimLightL" cx="20%" cy="30%" r="40%">
          <stop offset="0%" stopColor="rgba(57, 255, 20, 0.08)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* Body / shoulders — wide trapezoid */}
      <path
        d="M 30 600 L 80 280 Q 110 230 160 218 Q 200 213 240 218 Q 290 230 320 280 L 370 600 Z"
        fill="url(#hoodGrad)"
      />

      {/* Hood — angular peak shape */}
      <path
        d="M 85 280 Q 70 180 110 130 Q 145 95 200 92 Q 255 95 290 130 Q 330 180 315 280 Q 295 245 255 230 Q 200 222 145 230 Q 105 245 85 280 Z"
        fill="url(#hoodGrad)"
      />

      {/* Hood face cavity (deep shadow) */}
      <ellipse cx="200" cy="190" rx="55" ry="55" fill="#000000" />

      {/* Rim lights */}
      <rect x="0" y="0" width="400" height="600" fill="url(#rimLightR)" />
      <rect x="0" y="0" width="400" height="600" fill="url(#rimLightL)" />

      {/* Subtle hood edge highlight */}
      <path
        d="M 85 280 Q 70 180 110 130 Q 145 95 200 92"
        stroke="rgba(57, 255, 20, 0.06)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 200 92 Q 255 95 290 130 Q 330 180 315 280"
        stroke="rgba(57, 255, 20, 0.06)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
