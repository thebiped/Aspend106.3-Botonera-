"use client"

import { useState, useEffect } from "react"
import { Plus, Radio, Search } from "lucide-react"
import AddEffectModal from "./modal/Add/AddUserModal"
import EditEffectModal from "./modal/Edit/EditUserModal"
import { api } from "@/src/utils/api"
import "./Users.css"

function Users() {
  const [search, setSearch] = useState("")
  const [type, setType] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [userToEdit, setUserToEdit] = useState(null)
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await api.getAllUsers()
        if (data.usuarios) {
          setUsers(data.usuarios)
        }
        setLoading(false)
      } catch (err) {
        console.error("Error fetching users:", err)
        setError("Error al cargar usuarios")
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.n_usuario.toLowerCase().includes(search.toLowerCase()) ||
      (u.gmail && u.gmail.toLowerCase().includes(search.toLowerCase()))
    const matchesType = !type || u.tipo === type
    return matchesSearch && matchesType
  })

  const handleSaveUser = async (userData) => {
    try {
      const result = await api.createUser({
        n_usuario: userData.nombre,
        tipo: userData.rol,
        gmail: userData.email || "",
        contraseña: userData.password || "temp123",
      })

      if (result.usuario) {
        setUsers([...users, result.usuario])
        setModalOpen(false)
      } else {
        setError(result.error || "Error al crear usuario")
      }
    } catch (err) {
      console.error(" Error creating user:", err)
      setError("Error al crear usuario")
    }
  }

  const handleEdit = (user) => {
    setUserToEdit(user)
    setEditModalOpen(true)
  }

  const handleSaveEdit = async (editedUser) => {
    try {
      const result = await api.updateUser(editedUser.id_usuario, {
        n_usuario: editedUser.n_usuario,
        tipo: editedUser.tipo,
        gmail: editedUser.gmail,
      })

      if (result.usuario) {
        setUsers(users.map((u) => (u.id_usuario === editedUser.id_usuario ? result.usuario : u)))
        setEditModalOpen(false)
        setUserToEdit(null)
      } else {
        setError(result.error || "Error al actualizar usuario")
      }
    } catch (err) {
      console.error(" Error updating user:", err)
      setError("Error al actualizar usuario")
    }
  }

  const handleDeleteUser = async (userId) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      try {
        const result = await api.deleteUser(userId)
        if (result.success) {
          setUsers(users.filter((u) => u.id_usuario !== userId))
        } else {
          setError(result.error || "Error al eliminar usuario")
        }
      } catch (err) {
        console.error("Error deleting user:", err)
        setError("Error al eliminar usuario")
      }
    }
  }

  return (
    <div className="container">
      <div className="programs-header">
        <div className="programs-header-info">
          <h1 className="programs-title">Gestión de Usuarios</h1>
          <p className="programs-desc">Administra, crea y edita usuarios del sistema.</p>
        </div>
        <button className="sparkle-button" onClick={() => setModalOpen(true)}>
          <Plus size={18} /> Agregar Usuario
        </button>
      </div>

      {error && <div style={{ color: "red", marginBottom: "20px" }}>{error}</div>}

      <section className="effects-section">
        {loading ? (
          <div className="loading-skeleton">
            <div className="skeleton-header shimmer-bar"></div>
            <div className="skeleton-row shimmer-bar"></div>
            <div className="skeleton-row shimmer-bar"></div>
          </div>
        ) : (
          <>
            <div className="effects-section-header">
              <span className="effects-section-title">
                <Radio size={20} style={{ marginRight: 8 }} /> Lista de Usuarios
              </span>
              <div className="effects-filters">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Buscar usuario o email..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="">Todos los tipos</option>
                  <option value="admin">Admin</option>
                  <option value="operador">Operador</option>
                  <option value="productor">Productor</option>
                </select>
              </div>
            </div>

            <div className="table-wrapper">
              <table className="effects-table">
                <thead>
                  <tr>
                    <th>Usuario</th>
                    <th>Email</th>
                    <th>Tipo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((u) => (
                    <tr key={u.id_usuario}>
                      <td>{u.n_usuario}</td>
                      <td>{u.gmail}</td>
                      <td>
                        <span className={`effects-type effects-type-${u.tipo.toLowerCase()}`}>{u.tipo}</span>
                      </td>
                      <td>
                        <button className="effects-edit-btn" onClick={() => handleEdit(u)}>
                          Editar
                        </button>
                        <button
                          className="effects-delete-btn"
                          onClick={() => handleDeleteUser(u.id_usuario)}
                          style={{ marginLeft: "10px", background: "#e64a4a" }}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      <AddEffectModal open={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSaveUser} programas={[]} />
      <EditEffectModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSaveEdit}
        effect={userToEdit}
        programas={[]}
      />
    </div>
  )
}

export default Users