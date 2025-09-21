const sqlite3 = require('sqlite3');
const path = require('path');
const express = require('express');
const cors = require('cors');

const dbPath = path.resolve(__dirname, './botonera.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❗ No se pudo crear la BD');
  } else {
    console.log('✔ Se creó correctamente la BD');
  }     
});

// Crear tabla usuario
db.run(`
  CREATE TABLE IF NOT EXISTS usuario (
    id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
    n_usuario TEXT NOT NULL,
    contraseña TEXT NOT NULL,
    tipo TEXT,
    gmail TEXT
  )
`);

// Crear tabla subtipo
db.run(`
  CREATE TABLE IF NOT EXISTS subtipo (
    id_subtipo INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_subtipo TEXT
  )
`);

// Crear tabla s_personales
db.run(`
  CREATE TABLE IF NOT EXISTS s_personales (
    id_s_personales INTEGER PRIMARY KEY AUTOINCREMENT,
    id_usuario INTEGER,
    nombre TEXT,
    url_img TEXT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
  )
`);

const app = express();
app.use(express.json());
app.use(cors());

const authRouter = require('./routers/auth');
app.use('/api/auth', authRouter);

app.listen(3001, () => console.log('Servidor backend en puerto 3001'));

module.exports = db;