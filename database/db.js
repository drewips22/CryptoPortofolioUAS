// database/db.js
const mysql = require('mysql2');

// Konfigurasi koneksi database (sesuaikan dengan setting XAMPP Anda)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // user default xampp
  password: '', // password default xampp kosong
  database: 'uas_web2_crypto'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

module.exports = connection;