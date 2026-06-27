import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Stats from "@/components/landing/Stats";
import Footer from "@/components/landing/Footer";

function Atmosphere() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(900px 600px at 75% 10%, rgba(45,255,126,0.08), transparent 60%), radial-gradient(700px 500px at 10% 80%, rgba(45,255,126,0.05), transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        className="grid-bg"
        style={{ position: "fixed", inset: 0, opacity: 0.6, pointerEvents: "none", zIndex: 0 }}
      />
    </>
  );
}

export default function Landing() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Atmosphere />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1320,
          margin: "0 auto",
          padding: "28px 32px 56px",
        }}
      >
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <Footer />
      </div>
    </div>
  );
}
