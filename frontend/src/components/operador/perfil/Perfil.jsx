import Sidebar from "../../sidebar/Sidebar";
import "./Perfil.css";

function Perfil() {
  return (
    <div className="dashboard-root">
      <Sidebar active={3} userType="operador" userName="Pepe Pascal" />
      <div className="container">
        <div className="container-bg"></div>
        <main className="main-container">
          <header className="header">
            <h1 className="title">Perfil Personal</h1>
            <p className="description">
              Actualiza tu información personal, foto de perfil y preferencias
              dentro del sistema.
            </p>
          </header>
          <section className="perfil-section">
            <div className="perfil-card info-personal">
              <h2 className="perfil-card-title">Información Personal</h2>
              <p className="perfil-card-desc">Actualiza tus datos personales</p>
              <div className="perfil-user-row">
                <div className="perfil-avatar">PP</div>
                <div className="perfil-user-info">
                  <span className="perfil-user-name">
                    Pepe Pascal{" "}
                    <span className="perfil-user-role">Operador</span>
                  </span>
                  <div className="perfil-user-data">
                    <div>Email: usuario@gmail.com</div>
                    <div>Teléfono: +54 11 9876-5432</div>
                    <div>
                      Dirección: Av. San Martín, San Isidro, Buenos Aires
                      Argentina
                    </div>
                  </div>
                </div>
                <button className="perfil-edit-btn" title="Editar">
                  ✎
                </button>
              </div>
            </div>
            <div className="perfil-card danger-zone">
              <h2 className="perfil-card-title">Zona de Peligro</h2>
              <p className="perfil-card-desc">Acciones irreversibles</p>
              <button className="perfil-danger-btn">Desactivar Cuenta</button>
              <button className="perfil-danger-btn">Eliminar Cuenta</button>
            </div>
            <div className="perfil-card change-password">
              <h2 className="perfil-card-title">Cambiar Contraseña</h2>
              <form className="perfil-password-form">
                <label>
                  Contraseña Actual
                  <input
                    type="password"
                    placeholder="Ingresa tu contraseña actual"
                  />
                </label>
                <label>
                  Nueva Contraseña
                  <input
                    type="password"
                    placeholder="Ingresa tu nueva contraseña"
                  />
                </label>
                <label>
                  Confirmar Nueva Contraseña
                  <input
                    type="password"
                    placeholder="confirma tu nueva contraseña"
                  />
                </label>
                <button className="perfil-update-btn" type="submit">
                  Actualizar Contraseña
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Perfil;
