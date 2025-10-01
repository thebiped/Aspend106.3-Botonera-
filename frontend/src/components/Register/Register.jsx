import React from "react";
import { User, Mail, Lock } from "lucide-react";
import "./Register.css";
import sideImg from "../../assets/img/fondo-register.jpg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="main">
      <div className="container-register">
        <div className="img-register">
          <img src={sideImg} alt="register ilustración" />
        </div>
        <div className="register">
          <div className="register-form">
            <div className="logo">Aspend 106.3</div>
            <div className="title">Crear una cuenta</div>

            <div className="form" >
              <div className="input-group-register">
                <label>Username</label>
                <div className="input-group-wrapper-register">
                  <User size={20} color="#27489E" fill="#fff" />
                  <input type="text" placeholder="Escribe tu usuario..." required/>
                </div>
              </div>
              <div className="input-group-register">
                <label>Username</label>
                <div className="input-group-wrapper-register">
                  <Mail size={20} color="#27489E" />
                  <input type="email" placeholder="Escribe tu email..." required/>
                </div>
              </div>

              <div className="input-group-register">
                <label>Password</label>
                <div className="input-group-wrapper-register">
                  <Lock size={20} color="#27489E" fill="#fff" />
                  <input type="password" placeholder="Escribe tu contraseña..." required/>
                </div>
              </div>
              <div className="input-group-register">
                <label>Confirm Password</label>
                <div className="input-group-wrapper-register">
                  <Lock size={20} color="#27489E" fill="#fff" />
                  <input type="password" placeholder="Escribe tu contraseña..." required />
                </div>
              </div>

              <div className="form-options-register">
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="terms-register" className="inp-cbx" />
                  <label htmlFor="terms-register" className="cbx">
                    <span>
                      <svg viewBox="0 0 12 10" height="10px" width="12px">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>Acepto los términos y condiciones</span>
                  </label>
                </div>
              </div>

              <div className="action-register">
                <button className="register-btn">Registrarse</button>
              </div>
            </div>

            <div className="form-detail-register">
              ¿No tienes una cuenta?{" "}
                <Link to="/" className="login-link">Iniciar sesión</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;
