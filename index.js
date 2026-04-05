const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const START_TIME = Date.now();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Node.js Demo App!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/hello/:name', (req, res) => {
  const name = req.params.name;
  res.json({
    message: `Hello, ${name}!`,
    timestamp: new Date().toISOString()
  });
});

app.post('/api/echo', (req, res) => {
  res.json({
    echo: req.body,
    received_at: new Date().toISOString()
  });
});

app.get('/api/info', (req, res) => {
  const uptime = (Date.now() - START_TIME) / 1000;
  res.json({
    app: 'Node.js Demo',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    uptime: uptime
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
