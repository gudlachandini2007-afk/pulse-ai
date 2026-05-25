# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Pulse AI Dashboard

Overview:
Pulse AI is an AI-powered productivity dashboard that combines live APIs, automation workflows, and AI-generated insights.

Features:
- Live Weather Updates
- Crypto Market Snapshot
- IPL Live Match Tracking
- AI Executive Briefing
- AI Tech News Summaries
- Google Calendar Integration
- Todoist Task Management
- GitHub Activity Tracking
- Live Time Dashboard
- AI Insights & Recommendations

Tools Used:
- React.js
- JavaScript
- CSS
- OpenWeather API
- CoinGecko API
- Google Calendar API
- Todoist API
- GitHub API
- CricAPI
- n8n workflows
- Groq AI
- Hacker News API

Decisions Made:
I chose React for frontend UI development, n8n for automation workflows, and live APIs instead of dummy data to create a realistic dashboard.

Challenges:
- API rate limits
- CORS issues
- Google Calendar integration
- Todoist API debugging
- webhook setup issues

Future Improvements:
- secure API keys
- backend deployment
- user authentication
- personalized AI assistant
- mobile responsive dashboard
