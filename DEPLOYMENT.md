# Deploying N-CODE AI Studio

## Local demo (recommended for the challenge)

This Next.js app needs a running Ollama server **and** a PageSpeed Insights API connection.
```bash
npm install
ollama pull gemma3:4b
ollama serve
# in another terminal:
npm run dev
```

Ollama usually listens at http://127.0.0.1:11434. If already running as a system service do not start a second copy.

## Hosted deployment

Connect this repository to Vercel, Render, Railway or another Node-capable host, set environment variables in the host dashboard, and deploy.

**Important:** A Vercel deployment of the UI/API alone is **not** a working AI demo: `localhost` inside the serverless environment is not your laptop. For real AI outputs, use a separately hosted, authenticated open-weight inference service with Ollama-compatible `/api/generate`, or deploy both services into a controlled private network. Never expose an unauthenticated Ollama port to the public internet. This prototype's `OLLAMA_URL` has no application-level auth header support, so do not point it at an exposed inference endpoint.

Google's PageSpeed Insights API may require an API key or have quotas; use `PAGESPEED_API_KEY` if applicable.

**Production security:** Add authentication, rate limiting, server-side hostname allowlists, auditing request quotas and abuse monitoring before making this a public multi-user service.

This repo does not yet include public deployment credentials or proof of a live production deployment.
