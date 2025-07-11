// routes/aset.js
const express = require('express');
const router = express.Router();
const asetController = require('../controllers/asetController');

// READ: Tampilkan semua aset
router.get('/', asetController.getAllAset);

// CREATE: Tampilkan form tambah aset
router.get('/add', asetController.formTambahAset);

// CREATE: Proses penambahan aset baru
router.post('/add', asetController.storeAset);

// UPDATE: Tampilkan form edit aset
router.get('/edit/:id', asetController.formEditAset);

// UPDATE: Proses update aset
router.put('/update/:id', asetController.updateAset); // Menggunakan PUT

// DELETE: Proses hapus aset
router.delete('/delete/:id', asetController.deleteAset); // Menggunakan DELETE

module.exports = router;