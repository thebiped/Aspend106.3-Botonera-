import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import { Shield, Edit2, Trash2, User,Lock, AlertTriangle } from "lucide-react";
import '../../../assets/css/Admins/Perfil.css'

function Perfil() {
  return (
    <div className="dashboard-root">
      <Sidebar active="perfil" />
      <div className="container">
        <div className="container-bg" />
        {/* Header */}
        <div className="programs-header">
          <div className="programs-header-info">
            <h1 className="programs-title">Perfil Personal</h1>
            <p className="programs-desc">
              Actualiza tu información personal, foto de perfil y preferencias
              dentro del sistema.
            </p>
          </div>
        </div>
        <main className="main-container">
          <div className="main-container-perfil">
            <div className="perfil-main">
              <section className="perfil-card perfil-info">
                <div className="perfil-card-header">
                  <div className="perfil-card-encabezado">
                    <div className="perfil-card-encabezado-title">
                      <User size={26}/>
                      <h2 className="perfil-card-title">Información Personal</h2>
                    </div>
                    <p className="perfil-card-desc">
                      Actualiza tus datos personales
                    </p>
                  </div>
                  <button className="perfil-edit-btn" title="Editar">
                    <Edit2 size={18} />
                  </button>
                </div>
                <div className="perfil-user-row">
                  <div className="perfil-avatar">JAP</div>
                  <div className="perfil-user-info">
                    <h2 className="perfil-user-name">
                      Joser Alberto P{" "}
                      <span className="perfil-role perfil-role-admin">
                        Administrador
                      </span>
                    </h2>
                    <h3 className="perfil-user-data">
                      Email: usuario@gmail.com
                    </h3>
                    <h3 className="perfil-user-data">
                      Teléfono: +54 11 9876-5432
                    </h3>
                    <p className="perfil-user-data">
                      Dirección: Av. San Martín, San Isidro, Buenos Aires
                      Argentina
                    </p>
                  </div>
                </div>
              </section>
              <section className="perfil-card perfil-password">
                <div className="perfil-password-header">
                  <Shield size={26}/>
                  <h2 className="perfil-card-title">Cambiar Contraseña</h2>
                </div>
                <form className="perfil-password-form">
                  <div className="input-group">
                    <label>Contraseña Actual</label>
                    <div className="input-group-wrapper">
                      <Lock size={20} color="#27489E" fill="#fff" />
                      <input type="password"  placeholder="Ingresa tu contraseña actual"/>
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Nueva Contraseña</label>
                    <div className="input-group-wrapper">
                      <Lock size={20} color="#27489E" fill="#fff" />
                      <input type="password" placeholder="Ingresa tu nueva contraseña"/>
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Confirmar Nueva Contraseña</label>
                    <div className="input-group-wrapper">
                      <Lock size={20} color="#27489E" fill="#fff" />
                      <input type="password" placeholder="confirma tu nueva contraseña"/>
                    </div>
                  </div>

                  <div className="action">
                    <button className="perfil-password-btn" type="submit">
                      Actualizar Contraseña
                    </button>
                  </div>
                </form>
              </section>
            </div>
            <section className="perfil-card perfil-danger">
              <div className="perfil-danger-header">
                <div className="perfil-danger-header-title">
                  <AlertTriangle size={26}/>
                  <h2 className="perfil-card-title">Zona de Peligro</h2>
                </div>
                <p className="perfil-card-desc">Acciones irreversibles</p>
              </div>
              <button className="perfil-danger-btn">Desactivar Cuenta</button>
              <button className="perfil-danger-btn perfil-danger-delete">
                <Trash2 size={16} /> Eliminar Cuenta
              </button>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Perfil;
