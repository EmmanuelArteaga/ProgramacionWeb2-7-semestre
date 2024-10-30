// routes/pages.js
const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


router.get('/subpagina1', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'subpagina1.html'));
});


router.get('/subpagina2', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'subpagina2.html'));
});

module.exports = router;
