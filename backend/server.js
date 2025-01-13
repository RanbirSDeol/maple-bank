// server.js
const express = require("express");
const db = require("./config/db"); // Import the MySQL connection

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Example route to test DB connection
app.get("/", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT 1 AS test");
    console.log("Database connection successful");
    res.json(rows); // Return test result from DB
  } catch (err) {
    res.status(500).json({ message: "Database connection error", error: err });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
