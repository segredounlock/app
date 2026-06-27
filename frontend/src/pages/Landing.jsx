import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Stats from "@/components/landing/Stats";
import Footer from "@/components/landing/Footer";

export default function Landing() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#060906" }}>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1380,
          margin: "0 auto",
          padding: "24px 48px 48px",
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
