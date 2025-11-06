import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import { User, Lock, AlertTriangle, Edit2, Shield, Trash2 } from "lucide-react";
import "./PerfilOperador.css";

function PerfilOperador() {
  return (
    <div className="dashboard-root">
      <Sidebar active="perfil" userType="operador" userName="Pepe Pascal" />
      <div className="container">
        <div className="container-bg" />
        <header className="fppo-header">
          <h1 className="fppo-title">Perfil Operador</h1>
          <p className="fppo-desc">
            Actualiza tu información personal, contraseña y revisa acciones críticas dentro del sistema.
          </p>
        </header>
        <main className="main-container">
          <div className="main-container-perfil">
            <div className="fppo-main">
              {/* Información Personal */}
              <section className="fppo-card fppo-info">
                <div className="fppo-card-header">
                  <div className="fppo-card-encabezado">
                    <div className="fppo-card-encabezado-title">
                      <User size={26} />
                      <h2 className="fppo-card-title">Información Personal</h2>
                    </div>
                    <p className="fppo-card-desc">Actualiza tus datos personales</p>
                  </div>
                  <button className="fppo-edit-btn" title="Editar Usuario">
                    <Edit2 size={18} />
                  </button>
                </div>
                <div className="fppo-user-row">
                  <div className="fppo-avatar">PP</div>
                  <div className="fppo-user-info">
                    <h2 className="fppo-user-name">
                      Pepe Pascal
                      <span className="fppo-role">Operador</span>
                    </h2>
                    <h4 className="fppo-user-data">Email: operador@gmail.com</h4>
                    <h4 className="fppo-user-data">Teléfono: +54 11 9876-5432</h4>
                    <p className="fppo-user-data">
                      Dirección: Av. San Martín, San Isidro, Buenos Aires
                    </p>
                  </div>
                </div>
              </section>

              {/* Cambiar Contraseña */}
              <section className="fppo-card fppo-password">
                <div className="fppo-password-header">
                  <Shield size={26} />
                  <h2 className="fppo-card-title">Cambiar Contraseña</h2>
                </div>
                <form className="fpa-password-form">
                  <div className="input-group">
                    <label>Contraseña Actual</label>
                    <div className="input-group-wrapper">
                      <Lock size={20} color="#27489E" fill="#fff" />
                      <input
                        type="password"
                        placeholder="Ingresa tu contraseña actual"
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
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label>Confirmar Nueva Contraseña</label>
                    <div className="input-group-wrapper">
                      <Lock size={20} color="#27489E" fill="#fff" />
                      <input
                        type="password"
                        placeholder="confirma tu nueva contraseña"
                      />
                    </div>
                  </div>
                  <div className="action">
                    <button className="fpa-password-btn" type="submit">
                      Actualizar Contraseña
                    </button>
                  </div>
                </form>
              </section>
            </div>

            {/* Zona de Peligro */}
            <section className="fppo-card fppo-danger">
              <div className="fppo-danger-header">
                <div className="fppo-danger-header-title">
                  <AlertTriangle size={26} />
                  <h2 className="fppo-card-title">Zona de Peligro</h2>
                </div>
                <p className="fppo-card-desc">Acciones irreversibles</p>
              </div>
              <button className="fppo-danger-btn">Desactivar Cuenta</button>
              <button className="fppo-danger-btn fppo-danger-delete">
                <Trash2 size={16} /> Eliminar Cuenta
              </button>
            </section>
          </div>
        </main>
      </div>
    </div>

  );
}

export default PerfilOperador;
