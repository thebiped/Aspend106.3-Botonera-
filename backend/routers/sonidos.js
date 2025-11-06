const express = require("express")
const router = express.Router()

// === OBTENER TODOS LOS SONIDOS ===
router.get("/", (req, res) => {
  const db = req.db

  db.all(`SELECT * FROM sonidos`, [], (err, sonidos) => {
    if (err) return res.status(500).json({ error: "Error al obtener sonidos" })
    res.json(sonidos)
  })
})

// === OBTENER UN SONIDO POR ID ===
router.get("/:id", (req, res) => {
  const db = req.db
  const { id } = req.params

  db.get(`SELECT * FROM sonidos WHERE id_sonido = ?`, [id], (err, sonido) => {
    if (err) return res.status(500).json({ error: "Error al obtener sonido" })
    if (!sonido) return res.status(404).json({ error: "Sonido no encontrado" })
    res.json(sonido)
  })
})

// === OBTENER PROGRAMAS QUE USAN UN SONIDO ===
router.get("/:id/programas", (req, res) => {
  const db = req.db
  const { id } = req.params

  const query = `
    SELECT p.* 
    FROM programas p
    INNER JOIN programa_sonidos ps ON p.id_programa = ps.id_programa
    WHERE ps.id_sonido = ?
  `

  db.all(query, [id], (err, programas) => {
    if (err) return res.status(500).json({ error: "Error al obtener programas del sonido" })
    res.json(programas)
  })
})

// === CREAR UN NUEVO SONIDO ===
router.post("/", (req, res) => {
  const db = req.db
  const { nombre_sonido, url_sonidos, url_img } = req.body

  if (!nombre_sonido) {
    return res.status(400).json({ error: "El nombre del sonido es requerido" })
  }

  db.run(
    `INSERT INTO sonidos (nombre_sonido, url_sonidos, url_img) VALUES (?, ?, ?)`,
    [nombre_sonido, url_sonidos, url_img],
    function (err) {
      if (err) return res.status(500).json({ error: "Error al crear sonido" })
      res.json({
        mensaje: "Sonido creado correctamente",
        id: this.lastID,
      })
    },
  )
})

// === ACTUALIZAR UN SONIDO ===
router.put("/:id", (req, res) => {
  const db = req.db
  const { id } = req.params
  const { nombre_sonido, url_sonidos, url_img } = req.body

  db.run(
    `UPDATE sonidos SET nombre_sonido = ?, url_sonidos = ?, url_img = ? WHERE id_sonido = ?`,
    [nombre_sonido, url_sonidos, url_img, id],
    function (err) {
      if (err) return res.status(500).json({ error: "Error al actualizar sonido" })
      if (this.changes === 0) return res.status(404).json({ error: "Sonido no encontrado" })
      res.json({ mensaje: "Sonido actualizado correctamente" })
    },
  )
})

// === ELIMINAR UN SONIDO ===
router.delete("/:id", (req, res) => {
  const db = req.db
  const { id } = req.params

  // Primero eliminar las relaciones en programa_sonidos
  db.run(`DELETE FROM programa_sonidos WHERE id_sonido = ?`, [id], (err) => {
    if (err) return res.status(500).json({ error: "Error al eliminar relaciones" })

    // Luego eliminar el sonido
    db.run(`DELETE FROM sonidos WHERE id_sonido = ?`, [id], function (err) {
      if (err) return res.status(500).json({ error: "Error al eliminar sonido" })
      if (this.changes === 0) return res.status(404).json({ error: "Sonido no encontrado" })
      res.json({ mensaje: "Sonido eliminado correctamente" })
    })
  })
})

module.exports = router
