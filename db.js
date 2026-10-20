import mysql from 'mysql2/promise'
import 'dotenv/config';

const poolConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.DB,

  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0
}

const pool = mysql.createPool(poolConfig);

export default pool;