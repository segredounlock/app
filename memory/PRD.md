# Centraldark — Product Requirements

## Problem Statement
Cybersecurity learning platform (PT-BR). Dark hacker aesthetic with neon green accents. Landing + inner pages + dual auth.

## Architecture
- **Frontend:** React 19 + React Router v7 + custom CSS (JetBrains Mono + Inter).
- **Backend:** FastAPI + Motor (MongoDB async).
- **Auth:** Cookie-based sessions (`session_token`, 7d, httpOnly/secure/samesite=none) with Bearer fallback. Two providers writing to one `users` collection:
  - Email/Password (bcrypt, register/login)
  - Emergent-managed Google OAuth (`#session_id` → `/api/auth/google/session`)
- **Routing:** synchronous `session_id` hash detection at router root, then normal routes.

## Personas
- Aspiring ethical hackers / pentesters (BR).
- Cybersecurity learners, CTF players, students.
- Brazilian Portuguese-speaking community.

## What's Implemented
### Landing (`/`)
- Hex alien brand mark, pill buttons, SVG hooded figure with glowing chest logo.
- Floating terminals (SCAN NETWORK, nmap, SYSTEM STATUS, scan logs), world-map dotted background.
- 4 feature cards (LABS PRÁTICOS / FERRAMENTAS / CONTEÚDO / COMUNIDADE), 5-stat bar, social footer.

### Inner pages
- `/recursos` — 10 resource cards (Labs, Toolkit, Trilhas, CTFs, Mentoria, Certificações, Sandbox, Vault, API, Network Range).
- `/ferramentas` — 12 tools with search bar + 9 category filters, terminal-style command preview, "Abrir no Lab" CTA.
- `/planos` — 3 tiers (Recruta R$0 / Operador R$49 destacado / Elite R$129) with Mensal↔Anual toggle (-20%).
- `/sobre` — Valores, Jornada timeline (2022→2026), CTA "Contribuir / Falar com o time".
- `/contato` — form (`POST /api/contact` stored in MongoDB) + e-mail/Discord/SP info panel.
- `/dashboard` — protected route, shows user metadata + 4 mock tiles.
- `/auth/callback` — handles Emergent OAuth `session_id` exchange.

### Auth UI
- LoginModal + SignupModal share a unified visual; both expose a Google button.
- Navbar swaps in user-chip (first-letter avatar + username) + Logout button when authed.
- AuthContext exposes `user`, `loading`, `login`, `register`, `logout`, `refresh`.

### Backend endpoints
- `POST /api/auth/register`, `POST /api/auth/login`, `POST /api/auth/logout`
- `GET  /api/auth/me`, `GET /api/auth/google/session`
- `POST /api/contact`

## Test Results (iteration_1)
- Backend: 16/16 pytest pass.
- Frontend: signup→chip→logout, login, all inner routes, search/filter/toggle/contact submit verified.

## Backlog
- P1: Lab launcher (real containers), CTF leaderboard, billing (Stripe).
- P1: Password reset, email verification.
- P2: i18n (EN/ES), profile/avatar upload, RBAC roles (admin/mentor/student).
- P2: Public PGP key + bug-bounty flow on Contato page.

## Next Action Items
- Real container orchestration for Labs (out of scope here).
- Stripe billing integration for Planos.
