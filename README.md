# 💳 CashCard Frontend

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-7.3.1-007FFF?logo=mui&logoColor=white)](https://mui.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, futuristic **React-based frontend** for the CashCard Portal — a web application to manage digital cash cards for family members with style and ease.

## ✨ Features

- 🎨 **Futuristic UI Design** — Dark theme with vibrant cyan and purple accents, animated backgrounds, and smooth transitions
- 🔐 **Secure Authentication** — User authentication with HTTP Basic Auth
- 📋 **Complete CRUD Operations** — List, create, read, update, and delete cash cards
- 🔍 **Smart Search & Sort** — Filter and organize your cash cards efficiently
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast & Lightweight** — Built with Create React App for optimal performance
- 🎯 **Easy Configuration** — Configurable backend API URL via environment variables

## 🛠️ Tech Stack

- **Framework:** React 19.1.1
- **UI Library:** Material-UI (MUI) 7.3.1
- **Styling:** Emotion (CSS-in-JS)
- **Icons:** Material Icons
- **Build Tool:** Create React App
- **Language:** JavaScript (ES6+)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.x or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/vishnupchopra/cashcard-frontend.git
cd cashcard-frontend
```

2. **Install dependencies:**

```bash
npm install
```

or with yarn:

```bash
yarn install
```

### Running Locally

Start the development server:

```bash
npm start
```

or with yarn:

```bash
yarn start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000) 🎉

### Configuration

The frontend communicates with a backend API. By default, it uses a hosted backend at `https://cashcard-backend.onrender.com`.

To configure a different backend URL:

1. Create a `.env` file in the project root:

```bash
REACT_APP_API_URL=http://localhost:8080
```

2. Restart the development server for changes to take effect.

> **Note:** When deploying (e.g., on Vercel or Netlify), set the `REACT_APP_API_URL` environment variable in your hosting platform's settings.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode at [http://localhost:3000](http://localhost:3000) |
| `npm build` | Builds the app for production to the `/build` folder |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run eject` | Ejects from Create React App (⚠️ one-way operation) |

## 🎨 UI/UX Highlights

- **Animated Background:** Dynamic particle effects create an immersive experience
- **Glassmorphism:** Modern frosted-glass effect on UI components
- **Dark Theme:** Easy on the eyes with carefully chosen color palette
- **Smooth Animations:** Delightful micro-interactions throughout the app
- **Intuitive Navigation:** Clear call-to-action buttons and easy-to-use forms

## 📸 Screenshots

> Coming soon! Screenshots of the application will be added here.

## 🚢 Deployment

This application is production-ready and can be deployed to any static hosting service:

### Recommended Platforms

- **Vercel** — Zero-config deployment for React apps
- **Netlify** — Simple drag-and-drop deployment
- **GitHub Pages** — Free hosting for public repositories
- **AWS S3 + CloudFront** — Scalable cloud hosting

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `/build` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 🔗 Related Projects

- [CashCard Backend](https://github.com/vishnupchopra/cashcard-backend) — The Spring Boot backend for this application

---

Made with ❤️ using React and Material-UI
