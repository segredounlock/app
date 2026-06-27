import React from "react";

// Hexagonal CentralDark mascot mark — stylized alien/cyber character
export default function BrandMark({ size = 44, glow = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      style={glow ? { filter: "drop-shadow(0 0 12px rgba(45, 255, 126, 0.6))" } : {}}
    >
      {/* Outer hexagon */}
      <path
        d="M50 4 L90 26 L90 74 L50 96 L10 74 L10 26 Z"
        stroke="#2dff7e"
        strokeWidth="3"
        fill="rgba(45, 255, 126, 0.05)"
      />
      {/* Inner mascot shape: crown horns */}
      <path
        d="M30 38 L36 28 L42 36 L50 26 L58 36 L64 28 L70 38 L66 58 Q50 70 34 58 Z"
        fill="#2dff7e"
      />
      {/* Eye slits */}
      <rect x="38" y="44" width="6" height="10" fill="#021307" />
      <rect x="56" y="44" width="6" height="10" fill="#021307" />
      {/* Lower jaw */}
      <path
        d="M38 62 L44 72 L50 64 L56 72 L62 62 Q50 68 38 62 Z"
        fill="#2dff7e"
      />
    </svg>
  );
}
