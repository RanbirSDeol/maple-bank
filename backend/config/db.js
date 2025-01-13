// db.js
require("dotenv").config();
const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost", // Database host
  user: "root", // Your MySQL username (use 'root' or any user you created)
  password: process.env.DB_PASS, // Your MySQL password (leave empty if no password is set)
  database: "maple-bank-db", // The name of your database
});

// Export the pool to be used in other parts of the app
module.exports = pool.promise();
