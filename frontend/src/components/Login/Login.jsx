import React, { useState } from "react";
import "./Login.css";
import sideImg from "../../assets/img/jake.png"; 
import logo from "../../assets/img/Logo.png";
import { User, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [n_usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // 👈 Asegúrate de tener esto arriba, dentro del componente

const handleLogin = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  try {
    const res = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ n_usuario, contraseña })
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess("Login exitoso");

      // Guardar usuario mínimo en localStorage
      if (data.usuario) {
        localStorage.setItem(
          'usuario',
          JSON.stringify({
            id: data.usuario.id_usuario,
            n_usuario: data.usuario.n_usuario,
            tipo: data.usuario.tipo
          })
        );
      }

      // Redirigir según tipo
      const tipo = data.usuario?.tipo?.toLowerCase?.();
      let dest = '/';

      switch (tipo) {
        case 'admin':
          dest = '/admin/dashboard';
          break;
        case 'operador':
          dest = '/operador/dashboard';
          break;
        case 'productor':
          dest = '/productor/dashboard';
          break;
        default:
          dest = '/'; // o alguna página por defecto
      }

      setTimeout(() => navigate(dest), 400); // pequeña pausa para mostrar mensaje
    } else {
      setError(data.error || "Error de login");
    }
  } catch (err) {
    setError("No se pudo conectar al servidor");
  }
};
  return (
    <div className="main">
      <div className="container-login">
        <div className="login">
          <div className="login-form">
            <div className="logo">Aspend 106.3</div>
            <div className="title">Iniciar Sesión</div>

            <form className="form" onSubmit={handleLogin}>
              <div className="input-group-login">
                <label>Username</label>
                <div className="input-group-wrapper-login">
                  <User size={20} color="#27489E" fill="#fff" />
                  <input
                    type="text"
                    placeholder="Escribe tu usuario..."
                    value={n_usuario}
                    onChange={e => setUsuario(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group-login">
                <label>Password</label>
                <div className="input-group-wrapper-login">
                  <Lock size={20} color="#27489E" fill="#fff" />
                  <input
                    type="password"
                    placeholder="Escribe tu contraseña..."
                    value={contraseña}
                    onChange={e => setContraseña(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-options-login">
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="remember-login" className="inp-cbx" />
                  <label htmlFor="remember-login" className="cbx">
                    <span>
                      <svg viewBox="0 0 12 10" height="10px" width="12px">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>Recordarme</span>
                  </label>
                </div>
                <a href="#" className="forgot-link-login">¿Olvidaste tu contraseña?</a>
              </div>

              {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
              {success && <div style={{ color: 'green', marginBottom: '10px' }}>{success}</div>}

              <div className="action-login">
                <button className="login-btn" type="submit">Iniciar Sesión</button>
              </div>
            </form>

            <div className="form-detail-login">
              ¿No tienes una cuenta?{" "}
                <Link to="/register" className="register-link">Regístrate</Link>
            </div>
          </div>
        </div>

        <div className="img-login">
          <img src={sideImg} alt="Login ilustración" />
        </div>
      </div>
    </div>
  );
}

export default Login;
