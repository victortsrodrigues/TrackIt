# 📱 TrackIt – Habit Tracker Web App

[![Vite](https://img.shields.io/badge/built%20with-vite-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-18.3.1-61DAFB?logo=react)](https://react.dev/)

**TrackIt is a responsive web app for daily habit tracking, built with React, Vite, Styled Components, and Material UI. Users can register, log in, create and track habits, and mark them as completed—all with a mobile-first experience.**

🔗 **Production URL**: [track-it-brown-sigma.vercel.app/](https://track-it-brown-sigma.vercel.app/)

---

## 🧠 Overview

TrackIt offers:
- User registration and login
- Habit creation and management
- Daily habit overview
- Marking habits as completed/uncompleted
- Mobile-optimized interface

---

## 🚀 Technologies

- **React 18** + **Vite**
- **Styled Components**
- **Material UI (MUI)**
- **Axios** for HTTP requests
- **React Router DOM** for SPA navigation
- **Day.js** for date manipulation
- **React Loader Spinner** for loading feedback
- **ESLint** for code quality

---

## 📦 Features

- ✅ User authentication (login/signup)
- ✅ Session persistence (token in localStorage)
- ✅ Habit CRUD
- ✅ Daily habit overview
- ✅ Mark/unmark habits as completed
- ✅ Visual loading feedback
- ✅ Responsive, mobile-first design
- ✅ Componentization and global state (React Context API)

---

## 🏗️ Project Structure
projeto-modulo11/
 ├── public/
 ├── src/
 │ ├── assets/ 
 │ ├── components/ 
 │ ├── contexts/ 
 │ ├── pages/ 
 │ ├── styles/ 
 │ ├── App.jsx 
 │ ├── TrackIt.jsx 
 │ └── main.jsx 
 ├── package.json 
 └── README.md

---

## ⚙️ Running Locally

### Prerequisites

- Node.js 18+
- npm

### 1. Clone the repository

```bash
git clone https://github.com/your-username/projeto-modulo11.git
cd projeto-modulo11
```

### 2. Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm run dev
```
Visit http://localhost:5173 to view it in the browser.

---

## 📡 API
TrackIt consumes the [Bootcamp Responde Aí public API](https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/).
- `POST /auth/login` – User login
- `POST /auth/sign-up` – User registration
- `GET /habits` – List habits
- `POST /habits` – Create habit
- `GET /habits/today` – Today's habits
- `POST /habits/:id/check` – Mark habit as done
- `POST /habits/:id/uncheck` – Unmark habit

---

## 📬 Contributing
Pull requests are welcome!  
For major changes, please open an issue first to discuss what you'd like to change.

To contribute:
1. Fork the repository  
2. Create a feature branch  
3. Commit your changes with clear messages  
4. Ensure tests are included if applicable  
5. Open a pull request 

---

## 🛡️ License
MIT © [Victor Rodrigues](https://github.com/victortsrodrigues)

---
> Project developed for Driven – Module 11.
> Demonstrates proficiency in React, componentization, hooks, global context, REST API integration, and mobile UI/UX best practices.