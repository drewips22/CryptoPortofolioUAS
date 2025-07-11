// models/Aset.js
const db = require('../database/db');

const Aset = {
  getAll: (callback) => {
    const sql = 'SELECT *, (jumlah_koin * harga_beli_rata_rata) AS total_modal FROM aset ORDER BY id DESC';
    db.query(sql, callback);
  },
  getById: (id, callback) => {
    const sql = 'SELECT * FROM aset WHERE id = ?';
    db.query(sql, [id], callback);
  },
  create: (data, callback) => {
    const sql = 'INSERT INTO aset SET ?';
    db.query(sql, data, callback);
  },
  update: (id, data, callback) => {
    const sql = 'UPDATE aset SET ? WHERE id = ?';
    db.query(sql, [data, id], callback);
  },
  delete: (id, callback) => {
    const sql = 'DELETE FROM aset WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Aset;