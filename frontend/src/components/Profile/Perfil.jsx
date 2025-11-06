import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { User, Edit2, Lock, AlertTriangle, Shield, Trash2 } from "lucide-react";
import "./Perfil.css";

function Perfil() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  const roleColors = {
    admin: "#e64a4a",
    operador: "#10B981",
    productor: "#F472B6",
  };

  useEffect(() => {
    if (!storedUser) return;

    fetch(`http://localhost:3001/api/auth/user/${storedUser.id}`)
      .then((res) => res.json())
      .then((data) => {
        setUsuario(data.usuario);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [storedUser]);

  if (loading) return <p style={{ color: "#fff" }}>Cargando usuario...</p>;
  if (!usuario)
    return <p style={{ color: "#fff" }}>No se encontró el usuario</p>;

  const renderRoleSpecificContent = () => {
    switch (usuario.tipo) {
      case "admin":
        return (
          <p className="perfil-role-info">
            Tienes acceso total al sistema y gestión de usuarios.
          </p>
        );
      case "operador":
        return (
          <p className="perfil-role-info">
            Gestiona programas, efectos y contenido de transmisión.
          </p>
        );
      case "productor":
        return (
          <p className="perfil-role-info">
            Sube y organiza efectos o material para los programas.
          </p>
        );
      default:
        return <p className="perfil-role-info">Rol desconocido.</p>;
    }
  };

  return (
    <div className="dashboard-root">

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
                  <span
                    className="perfil-role"
                    style={{ background: roleColors[usuario.tipo] || "#ccc" }}
                  >
                    {usuario.tipo}
                  </span>
                </h2>
                <h4 className="perfil-user-data">Email: {usuario.gmail}</h4>
                <h4 className="perfil-user-data">
                  Teléfono: {usuario.telefono || "No definido"}
                </h4>
                <p className="perfil-user-data">
                  Dirección: {usuario.direccion || "No definida"}
                </p>
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
              <form className="perfil-password-form">
                <div className="input-group">
                  <label>Contraseña Actual</label>
                  <div className="input-group-wrapper">
                    <Lock size={20} color="#27489E" fill="#fff" />
                    <input
                      type="password"
                      placeholder="Ingresa tu contraseña actual"
                      autoComplete="current-password"
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
                      autoComplete="new-password"
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
                      autoComplete="new-password"
                    />
                  </div>
                </div>
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
  );
}

export default Perfil;
