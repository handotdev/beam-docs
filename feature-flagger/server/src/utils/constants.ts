const mysql = require('mysql');

export const host = 'localhost';
export const port = 3306;

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});