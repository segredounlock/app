import React from "react";
import { Shield, ShieldCheck } from "lucide-react";

const SCAN_ROWS = ["192.168.0.1", "192.168.0.2", "192.168.0.3", "192.168.0.4"];

const BOTTOM_LOGS = [
  "analyzing system...",
  "port scan initiated...",
  "5 open ports detected [22,80,443...]",
  "vulnerabilities checking...",
  "no critical vulnerabilities found",
  "system secure",
  "scan completed successfully",
];

export default function HeroVisual() {
  return (
    <div className="hero-figure rise d2 noise">
      <div className="world" />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "78%",
          height: "92%",
          background:
            "radial-gradient(ellipse 55% 45% at 50% 28%, #000 0%, rgba(0,0,0,0.95) 40%, transparent 70%), radial-gradient(ellipse 60% 70% at 50% 80%, #000 30%, transparent 75%)",
        }}
      />

      <div className="hero-brand">
        <div className="mark">
          <Shield size={56} strokeWidth={2.2} />
        </div>
        <div className="name">CENTRALDARK</div>
      </div>

      <div className="float-left">
        <div className="terminal">
          <div className="terminal-header">
            <span>SCAN NETWORK</span>
            <span style={{ color: "var(--text-mute)" }}>v2.3</span>
          </div>
          {SCAN_ROWS.map((ip) => (
            <div key={ip} className="term-row">
              <span>{ip}</span>
              <span className="ok">OPEN</span>
            </div>
          ))}
        </div>
      </div>

      <div className="float-right">
        <div className="terminal">
          <div className="term-line">nodes: 45 &gt; 23.48.48 targets</div>
          <div className="term-line">enumerating targets...</div>
          <div className="term-line">scan complete.</div>
        </div>
      </div>

      <div className="float-bottom-left">
        <div className="terminal">
          {BOTTOM_LOGS.map((line) => (
            <div key={line} className="term-line">{line}</div>
          ))}
        </div>
      </div>

      <div className="float-bottom-right">
        <div className="status-card">
          <div className="label">SYSTEM STATUS</div>
          <div className="shield">
            <ShieldCheck size={28} strokeWidth={2.2} />
          </div>
          <div className="state">PROTECTED</div>
          <div className="sub">last scan: 2 min ago<br />status: secure</div>
        </div>
      </div>
    </div>
  );
}
