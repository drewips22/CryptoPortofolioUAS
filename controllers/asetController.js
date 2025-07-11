// controllers/asetController.js
const Aset = require('../models/Aset');

// Menampilkan semua aset
exports.getAllAset = (req, res) => {
  Aset.getAll((err, results) => {
    if (err) return res.send(err);
    res.render('index', {
      title: 'Portofolio Crypto',
      data: results
    });
  });
};

// Menampilkan form tambah
exports.formTambahAset = (req, res) => {
  res.render('add', { title: 'Tambah Aset Baru' });
};

// Menyimpan aset baru
exports.storeAset = (req, res) => {
  Aset.create(req.body, (err, result) => {
    if (err) return res.send(err);
    res.redirect('/');
  });
};

// Menampilkan form edit
exports.formEditAset = (req, res) => {
  Aset.getById(req.params.id, (err, result) => {
    if (err) return res.send(err);
    res.render('edit', {
      title: 'Edit Aset',
      aset: result[0]
    });
  });
};

// Mengupdate aset
exports.updateAset = (req, res) => {
  Aset.update(req.params.id, req.body, (err, result) => {
    if (err) return res.send(err);
    res.redirect('/');
  });
};

// Menghapus aset
exports.deleteAset = (req, res) => {
  Aset.delete(req.params.id, (err, result) => {
    if (err) return res.send(err);
    res.redirect('/');
  });
};