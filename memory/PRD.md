# Centraldark — Landing Page

## Problem Statement
Replicate the "Centraldark" cybersecurity platform landing page based on a provided screenshot. Dark hacker aesthetic with neon green accents, Portuguese (BR) copy.

## Architecture
- Frontend-only React landing page (no backend dependencies needed yet).
- Stack: React + Tailwind base + custom CSS (JetBrains Mono + Space Grotesk).
- Icons: lucide-react.

## What's Implemented (Jan 2026)
- **Pixel-perfect refresh** to match attached reference (Jan 2026): hex alien brand mark, pill-style buttons, full-width hero with SVG hooded figure + glowing CENTRALDARK chest mark, world-map dotted background, repositioned terminal overlays (SCAN NETWORK top-left, nmap top-right, SYSTEM STATUS mid-right, analyzing logs bottom-left), divider-separated 4-feature row, 5-stat bar with large icons, minimal social-icon footer.
- **Signup modal** wired to "Criar Conta" button (username/email/password fields, esc + overlay-click to close).
- Navbar with logo, 6 nav links (Início active), Entrar + Criar Conta CTAs.
- Effects: scanline animation on terminals, neon glow buttons, hover lifts on cards, pulsing badge dot, staggered rise entry animations.
- Fully responsive.

## Personas
- Aspiring ethical hackers / pentesters.
- Cybersecurity learners (CTF players, students).
- Brazilian Portuguese-speaking community.

## Backlog
- P1: Connect CTAs to real signup/login flow (currently visual only).
- P1: Build inner pages — Recursos, Ferramentas, Planos, Sobre, Contato.
- P2: Add live CTF leaderboard widget.
- P2: Newsletter capture / email opt-in.
- P2: Internationalize (EN/ES) for broader reach.

## Next Action Items
- Validate visual match with user; collect feedback on copy/sections.
- Define auth + user dashboard scope if proceeding to full SaaS.
