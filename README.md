# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Pulse AI – Real-Time AI Agent Dashboard

## Overview

Pulse AI is a personalized AI-powered productivity dashboard built for busy IT professionals. It combines live APIs, AI-generated insights, authentication-based personalization, and automation workflows into a single intelligent dashboard experience.

The dashboard is designed so any user can connect their own Google and GitHub accounts to access personalized real-time productivity data instead of static demo content.

---

## Live Demo

Try the deployed dashboard here:

https://pulseai-dashboard.netlify.app/

This allows reviewers to instantly test the project without local setup.

---

## Features

- Live Weather Updates (location-based)
- Real-Time Crypto Market Snapshot
- GitHub Activity Tracking (dynamic user login)
- Google Calendar Events Integration
- Google Tasks & Priorities
- Gmail AI Summary (unread email insights)
- AI Executive Briefing (via automation workflow)
- AI Tech News Summaries (AI-generated)
- Real-Time Clock & Smart Greeting
- Firebase Authentication (Google + GitHub)
- Personalized Productivity Dashboard
- Live API-powered dynamic data (no hardcoded demo content)

---

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS

### Authentication
- Firebase Authentication
- Google OAuth
- GitHub OAuth

### APIs
- OpenWeather API
- CoinGecko API
- Google Calendar API
- Google Tasks API
- Gmail API
- GitHub API
- Hacker News API

### AI + Automation
- n8n Workflow Automation
- Groq AI

### Deployment
- Netlify

---

## Local Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/gudlachandini2007-afk/pulse-ai.git
```

---

### 2. Move Into Project Directory

```bash
cd pulse-ai
```

---

### 3. Install Dependencies

```bash
npm install
```

---

## Firebase Setup

Create a Firebase project:

https://console.firebase.google.com/

Enable:

- Google Authentication
- GitHub Authentication

Create file:

```text
src/firebase.js
```

Paste:

```javascript
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const githubProvider = new GithubAuthProvider();

export const googleProvider = new GoogleAuthProvider();

googleProvider.addScope(
  "https://www.googleapis.com/auth/calendar.readonly"
);

googleProvider.addScope(
  "https://www.googleapis.com/auth/tasks.readonly"
);

googleProvider.addScope(
  "https://www.googleapis.com/auth/gmail.readonly"
);
```

---

## n8n Workflow Setup

Install n8n:

```bash
npm install n8n -g
```

Start n8n:

```bash
n8n
```

Open:

```bash
http://localhost:5678
```

Configure workflows for:

- AI Executive Briefing
- AI Tech News Summary

Required setup:

- Add Groq API credentials
- Connect Hacker News API
- Create webhook endpoints
- Connect webhook URLs to frontend dashboard

Example webhook:

```bash
http://localhost:5678/webhook/pulse-ai-news
```

---

## Run Development Server

```bash
npm run dev
```

Application runs at:

```bash
http://localhost:5173
```

---

## Authentication Flow

When users open the dashboard:

- GitHub widget prompts GitHub login
- Google Calendar connects to personal calendar
- Google Tasks loads user tasks
- Gmail widget loads unread emails
- Dashboard becomes personalized per user

No hardcoded personal data is required.

---

## Design Decisions

- Used React + Vite for fast frontend development
- Used Firebase Authentication for personalized user access
- Integrated live APIs instead of dummy data
- Used Google services for universal productivity integrations
- Replaced limited sports API with Gmail AI Summary for stronger real-world usefulness
- Used n8n workflows for AI automation instead of hardcoding AI logic
- Focused on clean professional dashboard UI

---

## Challenges Faced

- API rate limits
- Google OAuth permission handling
- Firebase authentication setup
- CORS restrictions
- GitHub dynamic authentication integration
- Workflow automation debugging
- Webhook configuration issues
- Real-time API synchronization

---

## Future Improvements

- AI email summarization using LLMs
- Slack / Microsoft Teams integration
- Voice assistant support
- Smart AI task prioritization
- Meeting assistant
- Mobile responsiveness optimization
- Secure backend proxy for API protection
- Multi-user settings customization

---

## Author

Gudla Chandini
