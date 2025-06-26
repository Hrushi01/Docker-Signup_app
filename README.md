# 🐳 Dockerized Signup Form App

This project is a full-stack web application that allows users to register and view their details. It is fully containerized using **Docker** and **Docker Compose**. The stack includes:

- A static frontend served via **Nginx**
- A Node.js + Express **backend API**
- A **MongoDB** database
- **Mongo Express** UI for managing MongoDB collections

---

## 📁 Project Structure

Docker-signup_app/
├── backend/ # Node.js Express server
│ ├── server.js
│ ├── package.json
│ └── Dockerfile
├── frontend/ # Static HTML + CSS files served via Nginx
│ ├── index.html
│ ├── style.css
│ └── Dockerfile
├── docker-compose.yml # Defines all services
└── README.md # You're reading it!

yaml
Copy
Edit

---

## 🚀 How the App Works

### 🔗 Flow:

1. **Frontend** (on port `8080`) presents a signup form.
2. User fills the form → data is sent to the **Backend API** (`http://localhost:5050`).
3. The **Backend** stores this user data in **MongoDB**.
4. Registered users are displayed in a table on the frontend.
5. You can use **Mongo Express** (on port `8081`) to view and manage database collections visually.

---

## 🐳 Docker Compose Setup

All components run in isolated containers using a common Docker network.

### Services:

| Service       | Port    | Description                |
| ------------- | ------- | -------------------------- |
| frontend      | `8080`  | Nginx serving HTML/CSS/JS  |
| backend       | `5050`  | Node.js Express API server |
| mongo         | `27017` | MongoDB database           |
| mongo-express | `8081`  | MongoDB web UI             |

---

## ✅ Prerequisites

- Docker
- Docker Compose

---

## 🔧 How to Run the Project

# 1. Clone the repo

git clone https://github.com/your-username/docker-testapp-main.git
cd docker-testapp-main

# 2. Build and run all containers

docker-compose up --build
Or to run in background:

docker-compose up --build -d

🌐 Access the App
Component URL
Frontend http://localhost:8080
Backend Ping http://localhost:5050/ping
Mongo Express http://localhost:8081

```

```
