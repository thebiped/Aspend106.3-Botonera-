import Sidebar from "../../sidebar/Sidebar";
import { Shield, Edit2, Trash2, User, Lock, AlertTriangle } from "lucide-react";
import "./PerfilAdmin.css";

function PerfilAdmin() {
  return (
    <div className="dashboard-root">
      <Sidebar active="perfil" />
      <div className="container">
        <div className="container-bg" />
        <div className="programs-header">
          <h1 className="programs-title">Perfil Personal</h1>
          <p className="programs-desc">
            Actualiza tu información personal, foto de perfil y preferencias
            dentro del sistema.
          </p>
        </div>
        <main className="main-container">
          <div className="main-container-perfil">
            <div className="fpa-main">
              <section className="fpa-card fpa-info">
                <div className="fpa-card-header">
                  <div className="fpa-card-encabezado">
                    <div className="fpa-card-encabezado-title">
                      <User size={26} />
                      <h2 className="fpa-card-title">
                        Información Personal
                      </h2>
                    </div>
                    <p className="fpa-card-desc">
                      Actualiza tus datos personales
                    </p>
                  </div>
                  <button className="fpa-edit-btn" title="Editar">
                    <Edit2 size={18} />
                  </button>
                </div>
                <div className="fpa-user-row">
                  <div className="fpa-avatar">PP</div>
                  <div className="fpa-user-info">
                    <h2 className="fpa-user-name">
                      Pepe Pascal
                      <span className="fpa-role fpa-role-admin">
                        Administrador
                      </span>
                    </h2>
                    <h4 className="fpa-user-data">
                      Email: usuario@gmail.com
                    </h4>
                    <h4 className="fpa-user-data">
                      Teléfono: +54 11 9876-5432
                    </h4>
                    <p className="fpa-user-data">
                      Dirección: Av. San Martín, San Isidro, Buenos Aires
                      Argentina
                    </p>
                  </div>
                </div>
              </section>
              <section className="fpa-card fpa-password">
                <div className="fpa-password-header">
                  <Shield size={26} />
                  <h2 className="fpa-card-title">Cambiar Contraseña</h2>
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
            <section className="fpa-card fpa-danger">
              <div className="fpa-danger-header">
                <div className="fpa-danger-header-title">
                  <AlertTriangle size={26} />
                  <h2 className="fpa-card-title">Zona de Peligro</h2>
                </div>
                <p className="fpa-card-desc">Acciones irreversibles</p>
              </div>
              <button className="fpa-danger-btn">Desactivar Cuenta</button>
              <button className="fpa-danger-btn fpa-danger-delete">
                <Trash2 size={16} /> Eliminar Cuenta
              </button>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
export default PerfilAdmin;
