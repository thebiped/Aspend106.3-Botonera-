import React from "react";
import "./Login.css";
import sideImg from "../../assets/img/jake.png"; 
import logo from "../../assets/img/Logo.png";
import { User, Lock } from "lucide-react";
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="main">
      <div className="container-login">
        <div className="login">
          <div className="login-form">
            <div className="logo">Aspend 106.3</div>
            <div className="title">Iniciar Sesión</div>

            <div className="form">
              <div className="input-group-login">
                <label>Username</label>
                <div className="input-group-wrapper-login">
                  <User size={20} color="#27489E" fill="#fff" />
                  <input type="text" placeholder="Escribe tu usuario..." />
                </div>
              </div>

              <div className="input-group-login">
                <label>Password</label>
                <div className="input-group-wrapper-login">
                  <Lock size={20} color="#27489E" fill="#fff" />
                  <input type="password" placeholder="Escribe tu contraseña..." />
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

              <div className="action-login">
                <button className="login-btn">Iniciar Sesión</button>
              </div>
            </div>

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
