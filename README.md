# Node.js Demo App

A small, simple Node.js application built with Express.js to demonstrate basic API endpoints.

## Features

- ✨ Express.js server
- 🎯 Multiple API endpoints
- 📝 JSON request/response handling
- ⏱️ Timestamp tracking
- 🔧 Environment configuration

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/kvikash668/nodejs-demo-app.git
cd nodejs-demo-app
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
npm start
```

The server will run on `http://localhost:3000`

## Available Endpoints

### 1. Welcome Endpoint
```
GET /
```
Returns a welcome message with timestamp.

### 2. Hello Endpoint
```
GET /api/hello/:name
```
Returns a personalized greeting.

### 3. Echo Endpoint
```
POST /api/echo
```
Echoes back the JSON data sent in the request.

### 4. Info Endpoint
```
GET /api/info
```
Returns application information and uptime.

## License

MIT License
