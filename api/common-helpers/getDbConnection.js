module.exports = getDbConnection;

async function getDbConnection() {
  const mysql = require("mysql");
  require("dotenv").config();

  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  return await pool;
}
