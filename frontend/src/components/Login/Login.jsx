import React, { useState } from "react";
import "./Login.css";
import sideImg from "../../assets/img/jake.png"; 
import logo from "../../assets/img/Logo.png";
import { User, Lock } from "lucide-react";
import { Link } from "react-router-dom";
function Login() {
  const [n_usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
        // Aquí puedes redirigir o guardar el usuario en contexto
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
                <label className="remember-login">
                  <input type="checkbox" /> Recordarme
                </label>
                <a href="#" className="forgot-link-login">
                  ¿Olvidaste tu contraseña?
                </a>
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
