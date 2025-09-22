const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');

// Ruta para registrar usuario
router.post('/register', (req, res) => {
  const { n_usuario, contraseña, tipo, gmail } = req.body;
  db.run(
    `INSERT INTO usuario (n_usuario, contraseña, tipo, gmail) VALUES (?, ?, ?, ?)`,
    [n_usuario, contraseña, tipo, gmail],
    function (err) {
      if (err) return res.status(500).json({ error: 'Error al registrar usuario' });
      res.json({ mensaje: 'Usuario registrado', id: this.lastID });
    }
  );
});

// Ruta para login
router.post('/login', (req, res) => {
  const { n_usuario, contraseña } = req.body;
  db.get(
    `SELECT * FROM usuario WHERE n_usuario = ? AND contraseña = ?`,
    [n_usuario, contraseña],
    (err, user) => {
      if (err) return res.status(500).json({ error: 'Error de servidor' });
      if (!user) return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
      res.json({ mensaje: 'Login exitoso', usuario: user });
    }
  );
});

module.exports = router;