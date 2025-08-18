# CashCard Frontend

This repository contains the **React-based frontend** for the CashCard Portal — a simple web app to manage digital cash cards for family members.

## Features

- Responsive single-page application built with React and Material-UI
- User authentication with Basic Auth
- List, add, edit, delete cash cards
- Search and sort cash cards
- Supports dark theme with futuristic UI design
- Easily configurable backend API URL

## Getting Started

### Prerequisites

- Node.js (>=16.x recommended)
- npm or yarn

### Installation

1. Clone the repo:

git clone https://github.com/your-username/cashcard-frontend.git
cd cashcard-frontend

text

2. Install dependencies:

npm install

or
yarn install

text

### Running Locally

Start the development server:

npm start

or
yarn start

text

It will start on [http://localhost:3000](http://localhost:3000).

### Configuration

The frontend calls backend APIs configured by the `REACT_APP_API_URL` environment variable.

- To set it locally, create a `.env` file in the root with:

REACT_APP_API_URL=http://localhost:8080

text

- When deploying (e.g., on Vercel), set the environment variable accordingly.

## Scripts

- `start` — Runs the app in development mode.
- `build` — Builds the app for production (output in `/build`).
- `test` — Runs tests.
- `eject` — Ejects from Create React App (use cautiously).

## Deployment

This app is ready for deployment on static hosts such as **Vercel**, **Netlify**, or any static hosting service. Use the build output directory `/build`.

## License

MIT License

---

# `cashcard-backend` README
