const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// === REGISTRO DE USUARIO ===
router.post('/register', (req, res) => {
  const { n_usuario, contraseña, tipo, gmail } = req.body;
  const db = req.db;

  if (!n_usuario || !contraseña || !gmail) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  // Verificar si el usuario o el gmail ya existen
  db.get(
    `SELECT * FROM usuario WHERE n_usuario = ? OR gmail = ?`,
    [n_usuario, gmail],
    (err, existingUser) => {
      if (err) return res.status(500).json({ error: 'Error de servidor' });

      if (existingUser) {
        // Ya existe un usuario o gmail igual
        return res.status(400).json({ error: 'El usuario o el email ya están registrados' });
      }

      // Si no existe, encriptamos la contraseña y registramos
      bcrypt.hash(contraseña, 10, (err, hashed) => {
        if (err) return res.status(500).json({ error: 'Error al encriptar contraseña' });

        db.run(
          `INSERT INTO usuario (n_usuario, contraseña, tipo, gmail) VALUES (?, ?, ?, ?)`,
          [n_usuario, hashed, tipo, gmail],
          function (err) {
            if (err) return res.status(500).json({ error: 'Error al registrar usuario' });
            res.json({ mensaje: 'Usuario registrado correctamente', id: this.lastID });
          }
        );
      });
    }
  );
});

// === LOGIN DE USUARIO ===
router.post('/login', (req, res) => {
  const { n_usuario, contraseña } = req.body;
  const db = req.db;

  if (!n_usuario || !contraseña) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  db.get(
    `SELECT * FROM usuario WHERE n_usuario = ?`,
    [n_usuario],
    (err, user) => {
      if (err) return res.status(500).json({ error: 'Error de servidor' });
      if (!user) return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });

      bcrypt.compare(contraseña, user.contraseña, (err, isMatch) => {
        if (err) return res.status(500).json({ error: 'Error al verificar contraseña' });
        if (!isMatch) return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });

        const safeUser = { ...user };
        delete safeUser.contraseña;
        res.json({ mensaje: 'Login exitoso', usuario: safeUser });
      });
    }
  );
});

module.exports = router;
