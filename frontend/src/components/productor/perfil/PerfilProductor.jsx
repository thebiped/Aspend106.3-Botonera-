import Sidebar from "../../sidebar/Sidebar";
import "./PerfilProductor.css";
import { AlertTriangle, Edit2, Shield, Trash2, User, Lock } from "lucide-react";

function PerfilProductor() {
  const rol = "productor";
  return (
    <div className="dashboard-root">
      <Sidebar active={2} userType={rol} userName="Productor" />
      <div className="container">
        <div className="container-bg" />
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
                      <User size={26} />
                      <h2 className="perfil-card-title">
                        Información Personal
                      </h2>
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
                  <div className="perfil-avatar">PP</div>
                  <div className="perfil-user-info">
                    <h2 className="perfil-user-name">
                      Miguel Ángel{" "}
                      <span className="perfil-role perfil-role-operador">
                        Productor
                      </span>
                    </h2>
                    <h3 className="perfil-user-data">
                      Email: miguelangel@gmail.com
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
                    <button className="perfil-password-btn" type="submit">
                      Actualizar Contraseña
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PerfilProductor;
