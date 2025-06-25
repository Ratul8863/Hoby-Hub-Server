"# 🛠️ HobbyHub Server – Backend API for Local Hobby Groups

This is the **backend server** for the HobbyHub platform – a system where users can create, manage, and join hobby-based groups such as book clubs, painting circles, or hiking crews. Built with **Express.js** and **MongoDB**, the API handles group operations, user authentication, and protected route handling using **JWT tokens and cookies**.

---

## 🌐 Live Server

👉 [https://hobbyhub-server.vercel.app]

---

## 📦 Features

- 🧾 RESTful API to manage hobby groups
- 🔐 JWT-based Authentication
- 🧑‍💻 User data validation with middleware
- 📤 Create, update, delete, and retrieve groups
- 🔒 Secure cookie-based token system
- 🌐 CORS configured for frontend access

---

## 🧱 Backend Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logoColor=white)
![Cookie Parser](https://img.shields.io/badge/Cookie_Parser-ffc107?style=for-the-badge)
![dotenv](https://img.shields.io/badge/dotenv-000000?style=for-the-badge)
![CORS](https://img.shields.io/badge/CORS-4B32C3?style=for-the-badge)


---

## 📁 Folder Structure




-Step 1: Clone the server repository

- Step 2: Navigate into the project folder



# Step 2: Install dependencies
npm install

# Step 3: Create a `.env` file with the following variables
PORT=5000
DB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173

- Step 4: Run the server
node index.js
- OR (for development)
npx nodemon index.js



## 📦 Dependencies (Client)

```bash
express
cors
dotenv
mongoose
jsonwebtoken
cookie-parser
"

fix
