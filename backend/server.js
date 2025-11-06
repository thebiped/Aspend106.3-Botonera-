const express = require("express")
const cors = require("cors")
const path = require("path")
const sqlite3 = require("sqlite3")

// Instancia de la base de datos
const dbPath = path.resolve(__dirname, "./botonera.db")
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❗ No se pudo crear la BD")
  } else {
    console.log("✔ Se creó correctamente la BD")
  }
})

db.run(`
  CREATE TABLE IF NOT EXISTS usuario (
    id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
    n_usuario TEXT NOT NULL UNIQUE,
    contraseña TEXT NOT NULL,
    tipo TEXT,
    gmail TEXT UNIQUE
  )
`)

db.run(`
  CREATE TABLE IF NOT EXISTS subtipo (
    id_subtipo INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_subtipo TEXT,
    puntos INTEGER
  )
`)

db.run(`
  CREATE TABLE IF NOT EXISTS s_personales (
    id_s_personales INTEGER PRIMARY KEY AUTOINCREMENT,
    id_usuario INTEGER,
    nombre TEXT,
    url_img TEXT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
  )
`)

db.run(`
  CREATE TABLE IF NOT EXISTS programas (
    id_programa INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripcion TEXT,
    horario TEXT
  )
`)

db.run(`
  CREATE TABLE IF NOT EXISTS sonidos (
    id_sonido INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_sonido TEXT NOT NULL,
    url_sonidos TEXT,
    url_img TEXT
  )
`)

db.run(`
  CREATE TABLE IF NOT EXISTS programa_sonidos (
    id_programa_sonidos INTEGER PRIMARY KEY AUTOINCREMENT,
    id_programa INTEGER,
    id_sonido INTEGER,
    FOREIGN KEY (id_programa) REFERENCES programas(id_programa),
    FOREIGN KEY (id_sonido) REFERENCES sonidos(id_sonido)
  )
`)

db.run(`
  CREATE TABLE IF NOT EXISTS sonidos_institucionales (
    id_sonidos_institucionales INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    url_img TEXT,
    url_sonido TEXT
  )
`)

// Servidor Express
const app = express()
app.use(express.json())
app.use(cors())

// Pasar la instancia de db a los routers
app.use((req, res, next) => {
  req.db = db
  next()
})

const authRouter = require("./routers/auth")
const programasRouter = require("./routers/programas")
const sonidosRouter = require("./routers/sonidos")
const sonidosInstitucionalesRouter = require("./routers/sonidos-institucionales")
const usuariosRouter = require("./routers/usuarios")

app.use("/api/auth", authRouter)
app.use("/api/programas", programasRouter)
app.use("/api/sonidos", sonidosRouter)
app.use("/api/sonidos-institucionales", sonidosInstitucionalesRouter)
app.use("/api/usuarios", usuariosRouter)

app.listen(3001, () => console.log("Servidor backend en puerto 3001"))
