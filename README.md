# FocusBoard — Complete Website

Responsive task-management dashboard built with React, Vite, JavaScript, CSS, Lucide React and localStorage.

## Screens
- Overview: dynamic statistics, Focus Notes carousel, upcoming tasks and daily summary.
- My tasks: list and board views, search, combined status/priority filters, sorting, task details and CRUD.
- Calendar: monthly view, due-date events, month navigation and create-task-from-date.
- Settings: profile, saved preferences, compact rows, JSON export and sample-data reset.
- Help & support: searchable FAQ accordion and support email link.

## Run locally
Requirements: Node.js 18+ and npm.
```bash
npm install
npm run dev
```
Open the Vite URL, usually http://localhost:5173.

## Production build
```bash
npm run build
npm run preview
```

## Structure
```text
focusboard/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── useLocalStorage.js
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── AI_USAGE.md
```

## State and persistence
`useState` manages navigation, filters, sorting, carousel, forms, selected task details and month navigation. Task data and preferences are stored in localStorage. Statistics and filtered task results are derived from the task array. The task list is stored under `focusboard_tasks_complete`; preferences use `focusboard_preferences`.

## Deployment
Vercel or Netlify settings: build command `npm run build`; output directory `dist`; install command `npm install`.

## Design note
The provided assignment guide specifies screens and behaviours but does not include the actual Figma frame assets. This implementation follows the documented requirements with an original visual design. Exact pixel matching requires the original Figma link.
