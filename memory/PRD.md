# Centraldark — Landing Page

## Problem Statement
Replicate the "Centraldark" cybersecurity platform landing page based on a provided screenshot. Dark hacker aesthetic with neon green accents, Portuguese (BR) copy.

## Architecture
- Frontend-only React landing page (no backend dependencies needed yet).
- Stack: React + Tailwind base + custom CSS (JetBrains Mono + Space Grotesk).
- Icons: lucide-react.

## What's Implemented (Jan 2026)
- Navbar with logo (rotated shield diamond), 6 nav links (Início active), Entrar + Criar Conta CTAs.
- Hero section: badge, two-tone headline ("HACKEIE O CONHECIMENTO. / PROTEJA O FUTURO." with green accent), description, Começar Agora + Ver Demonstração CTAs, trust row (100% Legal, Foco em Ética, Comunidade Ativa).
- Animated terminal panels overlay (SCAN NETWORK, scan logs, system protected card) on hero visual side.
- Central CENTRALDARK glowing brand mark with rotated diamond shield.
- 4 feature cards: Labs Práticos, Ferramentas, Conteúdo, Comunidade.
- 5-stat bar: 10K+ Membros, 250+ Labs, 50+ Ferramentas, 120+ Tutoriais, 30+ CTFs.
- Footer disclaimer + 5 social icons (GitHub, Discord, Telegram, YouTube, Twitter).
- Effects: matrix grid background, neon glow buttons, hover lifts on cards, scanline animation on terminals, pulsing status dot, staggered rise entry animations.
- Fully responsive (collapses to 2-col → 1-col).

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
