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
                <input type="checkbox" />
                <label className="remember-register">
                   Acepto los términos y condiciones
                </label>
              </div>

              <div className="action-register">
                <button className="register-btn">Registrarse</button>
              </div>
            </div>

            <div className="form-detail-register">
              ¿No tienes una cuenta?{" "}
                <Link to="/register" className="login-link">Iniciar sesión</Link>
            </div>
          </div>
        </div>

        
      </div>
    </main>
  );
}

export default Register;
