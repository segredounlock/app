import React from "react";
import { Github, Send, Youtube, Twitter, MessagesSquare } from "lucide-react";
import { LANDING } from "@/constants/testIds";

const SOCIALS = [
  { testid: LANDING.socialGithub, Icon: Github },
  { testid: LANDING.socialDiscord, Icon: MessagesSquare },
  { testid: LANDING.socialTelegram, Icon: Send },
  { testid: LANDING.socialYoutube, Icon: Youtube },
  { testid: LANDING.socialTwitter, Icon: Twitter },
];

export default function Footer() {
  return (
    <footer
      data-testid={LANDING.footer}
      style={{ textAlign: "center", marginTop: 64, paddingBottom: 12 }}
    >
      <p
        style={{
          color: "var(--text-mute)",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          letterSpacing: "0.04em",
        }}
      >
        Centraldark não compactua com crimes. Use o conhecimento com ética.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 22 }}>
        {SOCIALS.map(({ testid, Icon }) => (
          <a key={testid} data-testid={testid} className="footer-icon" href="#">
            <Icon size={18} />
          </a>
        ))}
      </div>
    </footer>
  );
}
