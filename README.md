# N-CODE AI Studio

**Hacktoberfest 2026 — Week 2 / Side Hustle**

An open-source AI-powered website audit assistant by **N-CODE STUDIO**. It turns measured mobile Lighthouse/PageSpeed scores into prioritized, business-friendly recommendations using a locally hosted open-weight model through Ollama.

**Status:** Hacktoberfest MVP. Not yet publicly deployed or end-to-end verified.

## Features
- Public HTTPS website audit via Google PageSpeed Insights
- Performance, accessibility, SEO, and best-practice scores
- Prioritized issues and Core Web Vitals lab measurements
- Open-weight local AI recommendations with Ollama + Gemma
- Downloadable TXT report
- Explicit error messages if API or AI is unavailable

## Run locally

Requirements: Node.js 20+, Ollama.

```bash
npm install
cp .env.example .env.local
ollama pull gemma3:4b
ollama serve
npm run dev
```

Visit http://localhost:3000. Run checks with `npm run test`, `npm run typecheck` and `npm run build`.

## Architecture

`Browser → Next.js /api/audit → PageSpeed Insights (Lighthouse) → Ollama (local Gemma inference) → report`

**Privacy & safety:** Only public HTTPS URLs are accepted, and audit URLs are shared with Google's PageSpeed Insights service. The server does not directly fetch arbitrary submitted URLs. Auth and rate limiting are not implemented: this is a local demo, not a secured multi-user SaaS. Local Ollama is not directly available from a standard Vercel deployment; hosted deployments need a separate model-serving endpoint.

## Hacktoberfest submission

Challenge: https://dev.to/challenges/hacktoberfest-week2-2026-10-12

Deadline: October 18, 2026, 11:59 PM PDT (Oct 19, 12:29 PM Sri Lanka). Before submitting, verify eligibility, successfully demonstrate real Gemma inference, and add a working video or deployed demo. See `DEV_SUBMISSION_DRAFT.md` for an article draft.

MIT licensed. © 2026 N-CODE STUDIO.