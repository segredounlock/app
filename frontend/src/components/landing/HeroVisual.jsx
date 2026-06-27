import React from "react";
import BrandMark from "@/components/landing/BrandMark";
import HoodedFigure from "@/components/landing/HoodedFigure";
import { ShieldCheck } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="hero-figure rise d2">
      {/* World map background */}
      <div className="world-map" />
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

      {/* Hooded figure SVG */}
      <HoodedFigure />

      {/* Glowing chest logo overlaid on figure */}
      <div className="chest-logo">
        <BrandMark size={160} />
        <div className="chest-name">CENTRALDARK</div>
      </div>

      {/* Top-left: SCAN NETWORK */}
      <div className="float-tl">
        <div className="terminal">
          <div className="terminal-header">
            <span>SCAN NETWORK</span>
          </div>
          {["192.168.0.1", "192.168.0.2", "192.168.0.3", "192.168.0.4"].map((ip) => (
            <div key={ip} className="term-row">
              <span>{ip}</span>
              <span className="ok">OPEN</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top-right: nmap logs */}
      <div className="float-tr">
        <div className="terminal">
          <div className="term-line">nmap -sS -p 22,80,443 target</div>
          <div className="term-line">enumerating targets...</div>
          <div className="term-line">scan complete.</div>
        </div>
      </div>

      {/* Right-mid: SYSTEM STATUS */}
      <div className="float-mr">
        <div className="status-card">
          <div className="label">SYSTEM<br />STATUS</div>
          <div className="shield">
            <ShieldCheck size={26} strokeWidth={2.2} />
          </div>
          <div className="state">PROTECTED</div>
        </div>
      </div>

      {/* Bottom-left: enumerated logs */}
      <div className="float-bl">
        <div className="terminal">
          <div className="term-line">analyzing system...</div>
          <div className="term-line">port scan initiated...</div>
          <div className="term-line">5 open ports detected</div>
          <div className="term-line">scan completed successfully</div>
        </div>
      </div>
    </div>
  );
}
