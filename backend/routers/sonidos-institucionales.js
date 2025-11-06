const express = require("express")
const router = express.Router()

// === OBTENER TODOS LOS SONIDOS INSTITUCIONALES ===
router.get("/", (req, res) => {
  const db = req.db

  db.all(`SELECT * FROM sonidos_institucionales`, [], (err, sonidos) => {
    if (err) return res.status(500).json({ error: "Error al obtener sonidos institucionales" })
    res.json(sonidos)
  })
})

// === OBTENER UN SONIDO INSTITUCIONAL POR ID ===
router.get("/:id", (req, res) => {
  const db = req.db
  const { id } = req.params

  db.get(`SELECT * FROM sonidos_institucionales WHERE id_sonidos_institucionales = ?`, [id], (err, sonido) => {
    if (err) return res.status(500).json({ error: "Error al obtener sonido institucional" })
    if (!sonido) return res.status(404).json({ error: "Sonido institucional no encontrado" })
    res.json(sonido)
  })
})

// === CREAR UN NUEVO SONIDO INSTITUCIONAL ===
router.post("/", (req, res) => {
  const db = req.db
  const { nombre, url_img, url_sonido } = req.body

  if (!nombre) {
    return res.status(400).json({ error: "El nombre es requerido" })
  }

  db.run(
    `INSERT INTO sonidos_institucionales (nombre, url_img, url_sonido) VALUES (?, ?, ?)`,
    [nombre, url_img, url_sonido],
    function (err) {
      if (err) return res.status(500).json({ error: "Error al crear sonido institucional" })
      res.json({
        mensaje: "Sonido institucional creado correctamente",
        id: this.lastID,
      })
    },
  )
})

// === ACTUALIZAR UN SONIDO INSTITUCIONAL ===
router.put("/:id", (req, res) => {
  const db = req.db
  const { id } = req.params
  const { nombre, url_img, url_sonido } = req.body

  db.run(
    `UPDATE sonidos_institucionales SET nombre = ?, url_img = ?, url_sonido = ? WHERE id_sonidos_institucionales = ?`,
    [nombre, url_img, url_sonido, id],
    function (err) {
      if (err) return res.status(500).json({ error: "Error al actualizar sonido institucional" })
      if (this.changes === 0) return res.status(404).json({ error: "Sonido institucional no encontrado" })
      res.json({ mensaje: "Sonido institucional actualizado correctamente" })
    },
  )
})

// === ELIMINAR UN SONIDO INSTITUCIONAL ===
router.delete("/:id", (req, res) => {
  const db = req.db
  const { id } = req.params

  db.run(`DELETE FROM sonidos_institucionales WHERE id_sonidos_institucionales = ?`, [id], function (err) {
    if (err) return res.status(500).json({ error: "Error al eliminar sonido institucional" })
    if (this.changes === 0) return res.status(404).json({ error: "Sonido institucional no encontrado" })
    res.json({ mensaje: "Sonido institucional eliminado correctamente" })
  })
})

module.exports = router
