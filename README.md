# VitalVibe

Minimal full-stack starter:

- server/  → Express backend (port 5000)
- web-app/ → React + Vite frontend (port 5173)

## Quick start

### Backend
\`\`\`bash
cd vitalvibe/server
npm install
npm run dev
\`\`\`

### Frontend
\`\`\`bash
cd vitalvibe/web-app
npm install
npm run dev
\`\`\`

# Documentation for VitalVibe

This directory contains all documentation related to the VitalVibe project, including API specs, deployment guides, and user manuals.


The project Hierarchy and files Structure :

vitalvibe/
├── docs/
│   ├── API.md
│   ├── DEPLOYMENT.md
│   ├── DESIGN_SYSTEM.md
│   └── USER_GUIDE.md
├── server/
│   ├── node_modules/
│   ├── routes/
│   │   │── data.routes.js
│   │   └── symptom.routes.js
│   ├── models/
│   │   │── user.model.js
│   │   └── chatlog.model.js
│   ├── package-lock.json
│   │── package.json
│   │── server.js
│   └── .env
│── web-app/
│   ├── node_modules/
│   ├── public/
│       └── index.html
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── Chatbot/
│   │   │   │   └── Chatbot.jsx
│   │   │   ├── Common/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── Card.jsx
│   │   │   ├── Dashboard/
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── Profile/
│   │   │   │   └── Profile.jsx
│   │   │   ├── Reports/
│   │   │   │   └── Reports.jsx
│   │   │   ├── Routines/
│   │   │   │   └── Routines.jsx
│   │   │   ├── Sidebar/
│   │   │   │   ├── index.jsx
│   │   │   │   └── Sidebar.css
│   │   │   └── UI/
│   │   │   │   ├── Graph.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   └── Modal.jsx
│   │   │   │── Nav.jsx
│   │   │   └── DiagnosisDemo.jsx
│   │   ├── hooks/
│   │   │   └── useFetch.js
│   │   ├── layouts/
│   │   │   ├── MainLayout.css
│   │   │   └── MainLayout.jsx
│   │   ├── pages/
│   │   │   ├── AboutPage/
│   │   │   │   ├── index.jsx
│   │   │   │   └── AboutPage.css
│   │   │   ├── DashboardPage/
│   │   │   │   ├── index.jsx
│   │   │   │   └── DashboardPage.css
│   │   │   ├── HealthMetricsPage/
│   │   │   │   ├── index.jsx
│   │   │   │   └── HealthMetricsPage.css
│   │   │   ├── ProfilePage/
│   │   │   │   ├── index.jsx
│   │   │   │   └── ProfilePage.css
│   │   │   ├── ReportsPage/
│   │   │   │   ├── index.jsx
│   │   │   │   └── ReportsPage.css
│   │   │   ├── RoutinesPage/
│   │   │   │   ├── index.jsx
│   │   │   │   └── RoutinesPage.css
│   │   │   ├── SettingsPage/
│   │   │   │   ├── index.jsx
│   │   │   │   └── SettingsPage.css
│   │   │   └── SymptomCheckerPage/
│   │   │       ├── index.jsx
│   │   │       └── SymptomCheckerPage.css
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── symptomService.js
│   │   ├── utils/
│   │   │   └── helpers.js
│   │   ├── .env.local
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── yarn.lock
│   ├── eslint.config.js
│   ├── index.html
│   ├── LICENSE
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── .env
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── package-lock.json
├── package.json
├── payload.json
├── README.md
└-H


