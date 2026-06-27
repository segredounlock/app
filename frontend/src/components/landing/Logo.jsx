import React from "react";
import BrandMark from "@/components/landing/BrandMark";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <BrandMark size={48} />
      <div>
        <div className="logo-wordmark">
          CENTRAL<span style={{ color: "var(--neon)" }}>DARK</span>
        </div>
        <div className="logo-sub">H.H  HACK · LEARN · PROTECT</div>
      </div>
    </div>
  );
}
