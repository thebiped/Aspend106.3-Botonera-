"use client"

import { useEffect, useState } from "react"
import Sidebar from "../sidebar/Sidebar"
import { User, Edit2, Lock, AlertTriangle, Shield, Trash2 } from "lucide-react"
import { api } from "@/src/utils/api"
import "./Perfil.css"

function Perfil() {
  const storedUser = JSON.parse(localStorage.getItem("user"))
  const [usuario, setUsuario] = useState(null)
  const [loading, setLoading] = useState(true)
  const [passwordForm, setPasswordForm] = useState({
    contraseña_actual: "",
    contraseña_nueva: "",
    confirmar_contraseña: "",
  })
  const [message, setMessage] = useState("")

  const roleColors = {
    admin: "#e64a4a",
    operador: "#10B981",
    productor: "#F472B6",
  }

  useEffect(() => {
    if (!storedUser) return

    const fetchUser = async () => {
      try {
        const data = await api.getUserById(storedUser.id)
        if (data.usuario) {
          setUsuario(data.usuario)
        }
        setLoading(false)
      } catch (err) {
        console.error("[v0] Error fetching user:", err)
        setLoading(false)
      }
    }

    fetchUser()
  }, [storedUser])

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    setMessage("")

    if (passwordForm.contraseña_nueva !== passwordForm.confirmar_contraseña) {
      setMessage("Las nuevas contraseñas no coinciden")
      return
    }

    try {
      const result = await api.changePassword(
        storedUser.id,
        passwordForm.contraseña_actual,
        passwordForm.contraseña_nueva,
      )

      if (result.success) {
        setMessage("Contraseña actualizada exitosamente")
        setPasswordForm({
          contraseña_actual: "",
          contraseña_nueva: "",
          confirmar_contraseña: "",
        })
      } else {
        setMessage(result.error || "Error al cambiar contraseña")
      }
    } catch (err) {
      console.error("[v0] Error changing password:", err)
      setMessage("Error al cambiar contraseña")
    }
  }

  if (loading) return <p style={{ color: "#fff" }}>Cargando usuario...</p>
  if (!usuario) return <p style={{ color: "#fff" }}>No se encontró el usuario</p>

  const renderRoleSpecificContent = () => {
    switch (usuario.tipo) {
      case "admin":
        return <p className="perfil-role-info">Tienes acceso total al sistema y gestión de usuarios.</p>
      case "operador":
        return <p className="perfil-role-info">Gestiona programas, efectos y contenido de transmisión.</p>
      case "productor":
        return <p className="perfil-role-info">Sube y organiza efectos o material para los programas.</p>
      default:
        return <p className="perfil-role-info">Rol desconocido.</p>
    }
  }

  return (
    <div className="dashboard-root">
      <Sidebar />
      <div className="container">
        <div className="container-bg" />

        <main className="main-container ">
          {/* ===== Información Personal ===== */}
          <div className="perfil-card perfil-info">
            <div className="perfil-card-header">
              <div className="perfil-card-encabezado-title">
                <User size={26} />
                <h2 className="perfil-card-title">Información Personal</h2>
              </div>
              <button className="perfil-edit-btn" title="Editar">
                <Edit2 size={18} />
              </button>
            </div>
            <div className="perfil-user-row">
              <div className="perfil-avatar">
                {usuario.n_usuario?.[0]}
                {usuario.n_usuario?.split(" ")[1]?.[0] ?? ""}
              </div>
              <div className="perfil-user-info">
                <h2 className="perfil-user-name">
                  {usuario.n_usuario}
                  <span className="perfil-role" style={{ background: roleColors[usuario.tipo] || "#ccc" }}>
                    {usuario.tipo}
                  </span>
                </h2>
                <h4 className="perfil-user-data">Email: {usuario.gmail}</h4>
                <h4 className="perfil-user-data">Teléfono: {usuario.telefono || "No definido"}</h4>
                <p className="perfil-user-data">Dirección: {usuario.direccion || "No definida"}</p>
                {renderRoleSpecificContent()}
              </div>
            </div>
          </div>

          {/* ===== Cambiar Contraseña ===== */}
          <div className="perfil-item">
            <div className="perfil-card perfil-password">
              <div className="perfil-password-header">
                <Shield size={26} />
                <h2 className="perfil-card-title">Cambiar Contraseña</h2>
              </div>
              <form className="perfil-password-form" onSubmit={handlePasswordChange}>
                <div className="input-group">
                  <label>Contraseña Actual</label>
                  <div className="input-group-wrapper">
                    <Lock size={20} color="#27489E" fill="#fff" />
                    <input
                      type="password"
                      placeholder="Ingresa tu contraseña actual"
                      value={passwordForm.contraseña_actual}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          contraseña_actual: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label>Nueva Contraseña</label>
                  <div className="input-group-wrapper">
                    <Lock size={20} color="#27489E" fill="#fff" />
                    <input
                      type="password"
                      placeholder="Ingresa tu nueva contraseña"
                      value={passwordForm.contraseña_nueva}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          contraseña_nueva: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label>Confirmar Nueva Contraseña</label>
                  <div className="input-group-wrapper">
                    <Lock size={20} color="#27489E" fill="#fff" />
                    <input
                      type="password"
                      placeholder="Confirma tu nueva contraseña"
                      value={passwordForm.confirmar_contraseña}
                      onChange={(e) =>
                        setPasswordForm({
                          ...passwordForm,
                          confirmar_contraseña: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                {message && (
                  <div
                    style={{
                      color: message.includes("exitosamente") ? "green" : "red",
                      marginBottom: "10px",
                    }}
                  >
                    {message}
                  </div>
                )}
                <div className="action">
                  <button className="perfil-password-btn" type="submit">
                    Actualizar Contraseña
                  </button>
                </div>
              </form>
            </div>

            {/* ===== Zona de Peligro ===== */}
            <div className="perfil-card perfil-danger">
              <div className="perfil-danger-header">
                <div className="perfil-danger-header-title">
                  <AlertTriangle size={26} />
                  <h2 className="perfil-card-title">Zona de Peligro</h2>
                </div>
                <p className="perfil-card-desc">Acciones irreversibles</p>
              </div>
              <button className="perfil-danger-btn">Desactivar Cuenta</button>
              <button className="perfil-danger-btn perfil-danger-delete">
                <Trash2 size={16} /> Eliminar Cuenta
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Perfil