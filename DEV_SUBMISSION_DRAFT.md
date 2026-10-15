# N-CODE AI Studio: Turning Website Audits into an Open-Source AI Side Hustle

> **DRAFT — DO NOT PUBLISH until a real demo and AI response have been verified.** Use the challenge's official DEV submission template and required tags. Avoid claims about untested functionality.

## What I Built

I created **N-CODE AI Studio**, an open-source website audit assistant for freelancers, designers, and small-business owners. The idea is simple: turn measured website performance and quality indicators into actionable recommendations a business owner can understand. Independent freelancers could potentially offer website improvement audits as a service.

The application was built under **N-CODE STUDIO** for the Hacktoberfest 2026 Week 2 **Side Hustle** challenge.

## Try It Out

**Source code:** https://github.com/Deshan217/ncode-ai-studio-hf26

**Live demo or demonstration video:** [ADD VERIFIED PUBLIC URL BEFORE PUBLISHING]

**Real audit screenshots:** [ADD REAL SCREENSHOTS]

## How It Works

1. A user provides a public HTTPS website address.
2. A Next.js server route validates the URL and requests a *mobile lab audit* via Google PageSpeed Insights (Lighthouse).
3. The app displays performance, accessibility, SEO, and best-practice scores, selected lab metrics, and potential issues.
4. When a local **Ollama** instance with the open-weight **Gemma 3 4B** model is available, the app sends a structured summary of the audit to the model to create prioritized recommendations.
5. The user can download a text report.

The architecture separates measured audit results from generative AI. If Ollama is unavailable, the UI should display that limitation rather than pretending an AI response exists.

**Tech stack:** Next.js, React, TypeScript, Lucide, Google PageSpeed Insights, Ollama, Gemma 3.

**AI model invocation evidence:** [ADD ACTUAL RUN: model version, screenshot/output, date]

**Audit test evidence:** [ADD ACTUAL URL, SCORE SCREENSHOT, AND RESULTS]

## Why Open Innovation?

The AI recommendations use a locally runnable open-weight model, rather than requiring a proprietary inference API. That lets developers inspect the integration, customize the prompts, and decide where to host inference. The project is distributed under the MIT license.

The PageSpeed audit itself still depends on a Google service; the entire project is **not** an offline-only solution.

## Is This a Viable Side Hustle?

A freelancer might use the tool to prepare an initial audit and sell subsequent consulting, implementation, accessibility improvements, or speed optimization. This is a **hypothesis**, not a validated business or existing revenue stream. Future work includes better report design, audit history, pricing experiments, and user research.

## Challenges, Limits & Lessons

- A local Ollama server is not automatically available in a cloud deployment.
- The public application needs authentication and rate limits before operating as a multi-user SaaS.
- Lighthouse scores are simulated lab data and not a promise of user outcomes.
- Open-weight AI output may contain mistakes and needs human review.
- The original GitHub CI run failed on lint errors; fixes were committed and require confirmation from the latest CI run.

## What Comes Next

Deploy a working demo with a securely hosted inference service, evaluate real audited sites, collect feedback from freelancers, and contribute improvements openly.

## Challenge Submission Checklist

- [ ] Official Week 2 template and required tags verified
- [ ] Latest GitHub CI fully green
- [ ] Real audit result captured
- [ ] Gemma model response captured and checked
- [ ] Publicly viewable video or live demo URL included
- [ ] Any required prize category details completed truthfully
- [ ] Article published on DEV before deadline

**Repository:** https://github.com/Deshan217/ncode-ai-studio-hf26

**Challenge:** https://dev.to/challenges/hacktoberfest-week2-2026-10-12
