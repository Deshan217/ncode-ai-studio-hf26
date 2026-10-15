# N-CODE AI Studio: A Practical AI Side Hustle for Website Improvement

## What I Built
N-CODE AI Studio is a website auditing assistant for small businesses and freelance website consultants. It uses real Google PageSpeed Insights Lighthouse audits to uncover performance, SEO, accessibility and best-practice concerns and an open-weight Gemma model via local Ollama to propose practical improvements.

## Demo
[Insert recorded live walkthrough or working deployment URL. Do not claim this is live before verifying.]

## Code
https://github.com/Deshan217/ncode-ai-studio-hf26

## How I Built It
The frontend is built with Next.js and TypeScript. A server route validates public HTTPS URLs and requests Lighthouse lab data from PageSpeed Insights. Selected scores and issues are sent to a locally operated open-weight Gemma model. The resulting advice can be exported as a text report. If Ollama is unavailable, the UI reports the missing inference rather than fabricating an AI result.

## Open Innovation
Open-weight model inference makes the analysis layer independently runnable, inspectable and swappable. The app is MIT licensed to support community improvement. It does still use Google's PageSpeed Insights for website measurement.

## Challenges and Lessons
[Add true experience, actual testing screenshots and model run evidence.]

## What's Next
Improve accessibility, add saved audit history, rate limiting and secure hosted model infrastructure. Validate whether small businesses would pay for personalized audit reports.

> Before publishing: verify the exact official submission template and challenge tags, replace placeholders with tested evidence, and comply with all contest rules.
