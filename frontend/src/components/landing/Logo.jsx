import React from "react";
import { Shield } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="logo-mark">
        <Shield size={22} strokeWidth={2.4} />
      </div>
      <div>
        <div className="logo-wordmark">
          CENTRAL<span style={{ color: "var(--neon)" }}>DARK</span>
        </div>
        <div className="logo-sub">HACK · LEARN · PROTECT</div>
      </div>
    </div>
  );
}
