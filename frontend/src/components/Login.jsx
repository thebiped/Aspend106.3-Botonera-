import React from "react";
import "../assets/css/Login.css";
import sideImg from "../assets/img/jake.png"; 
import logo from "../assets/img/Logo.png";
import { User, Lock } from "lucide-react";


function Login() {
  return (
    <div className="main">
      <div className="container-login">
        <div className="login">
          <div className="login-form">
            <div className="logo">Aspend 106.3</div>
            <div className="title">Iniciar Sesión</div>

            <div className="form">
              <div className="input-group">
                <label>Username</label>
                <div className="input-group-wrapper">
                  <User size={20} color="#27489E" fill="#fff" />
                  <input type="text" placeholder="Escribe tu usuario..." />
                </div>
              </div>

              <div className="input-group">
                <label>Password</label>
                <div className="input-group-wrapper">
                  <Lock size={20} color="#27489E" fill="#fff" />
                  <input type="password" placeholder="Escribe tu contraseña..." />
                </div>
              </div>

              <div className="form-options">
                <label className="remember">
                  <input type="checkbox" /> Recordarme
                </label>
                <a href="#" className="forgot-link">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <div className="action">
                <button className="login-btn">Iniciar Sesión</button>
              </div>
            </div>

            <div className="form-detail">
              ¿No tienes una cuenta?{" "}
              <a href="#" className="register-link">
                Regístrate
              </a>
            </div>
          </div>
        </div>

        <div className="img">
          <img src={sideImg} alt="Login ilustración" />
        </div>
      </div>
    </div>
  );
}

export default Login;
