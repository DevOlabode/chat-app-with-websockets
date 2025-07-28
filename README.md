# 💬 Real-Time Chat App with WebSockets

A simple real-time chat application built with **Node.js**, **Express**, and **Socket.io** to demonstrate the power of WebSockets for real-time communication.

## 🚀 Features

- Real-time bi-directional communication between clients
- Users can join and leave the chat dynamically
- Basic UI to send and display messages instantly
- Server-side event logging for connections and disconnections

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **WebSocket Library**: Socket.io

## 📂 Folder Structure

```
web socket/
│
├── public/
│   ├── index.html       # Frontend UI
│   └── style.css        # Stylesheet
│
├── server.js            # Express + Socket.io server
└── package.json         # Project dependencies and scripts
```

## 🧑‍💻 How It Works

- When a user opens the app, a WebSocket connection is established with the server using Socket.io.
- Messages sent by one user are instantly broadcast to all connected users.
- Console logs track user connections and disconnections on the server side.

## 🚦 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repo

```bash
git clone https://github.com/DevOlabode/chat-app-with-websockets.git
cd chat-app-with-websockets
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
node server.js
```

The app will be available at:

```
http://localhost:3000
```

Open in two or more tabs to simulate multiple users chatting in real time.

## 📦 Dependencies

- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)

## 📌 Future Improvements

- Add chat rooms functionality
- Include usernames or nicknames
- Save messages with a database (e.g., MongoDB)
- Deploy on platforms like Vercel, Render, or Railway

## 🧑‍🎓 Author

**Olabode Oluwapelumi Samuel**

- GitHub: [@DevOlabode](https://github.com/DevOlabode)

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.
