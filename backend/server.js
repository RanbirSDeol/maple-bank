const express = require('express');
const db = require('./config/db');

const app = express();

// Middleware
app.use(express.json());

// Example Route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js and MySQL backend!');
});

// Test Database Connection
app.get('/test-db', (req, res) => {
  db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      return res.status(500).send('Database query error');
    }
    res.send(`The solution is: ${results[0].solution}`);
  });
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
