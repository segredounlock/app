import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function PageShell({ children, eyebrow, title, lead }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#060906" }}>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1380, margin: "0 auto", padding: "24px 48px 48px" }}>
        <Navbar />
        <header style={{ padding: "60px 0 40px", borderBottom: "1px solid var(--border)" }}>
          {eyebrow && (
            <div className="badge" style={{ marginBottom: 22 }}>
              <span className="dot" /> {eyebrow}
            </div>
          )}
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 4.4vw, 4rem)", maxWidth: 980 }}>
            {title}
          </h1>
          {lead && (
            <p style={{
              marginTop: 22, maxWidth: 720, color: "var(--text-dim)",
              fontSize: 17, lineHeight: 1.65,
            }}>{lead}</p>
          )}
        </header>
        <main style={{ padding: "40px 0" }}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
