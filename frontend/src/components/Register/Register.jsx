import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import "./Register.css";
import sideImg from "../../assets/img/fondo-register.jpg";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [n_usuario, setUsuario] = useState("");
  const [gmail, setGmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirm, setConfirm] = useState("");
  const [tipo, setTipo] = useState("operador");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!n_usuario || !contraseña || !gmail) {
      setError('Completa todos los campos');
      return;
    }
    if (contraseña !== confirm) {
      setError('Las contraseñas no coinciden');
      return;
    }
    try {
      const res = await fetch('http://localhost:3001/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ n_usuario, contraseña, tipo, gmail })
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Registro exitoso. Redirigiendo al login...');
        setTimeout(() => navigate('/'), 1000);
      } else {
        setError(data.error || 'Error al registrar');
      }
    } catch (err) {
      setError('No se pudo conectar al servidor');
    }
  };

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
            <form className="form" onSubmit={handleRegister}>
              <div className="input-group-register">
                <label>Username</label>
                <div className="input-group-wrapper-register">
                  <User size={20} color="#27489E" fill="#fff" />
                  <input type="text" placeholder="Escribe tu usuario..." value={n_usuario} onChange={e=>setUsuario(e.target.value)} required/>
                </div>
              </div>
              <div className="input-group-register">
                <label>Email</label>
                <div className="input-group-wrapper-register">
                  <Mail size={20} color="#27489E" />
                  <input type="email" placeholder="Escribe tu email..." value={gmail} onChange={e=>setGmail(e.target.value)} required/>
                </div>
              </div>

              <div className="input-group-register">
                <label>Password</label>
                <div className="input-group-wrapper-register">
                  <Lock size={20} color="#27489E" fill="#fff" />
                  <input type="password" placeholder="Escribe tu contraseña..." value={contraseña} onChange={e=>setContraseña(e.target.value)} required/>
                </div>
              </div>
              <div className="input-group-register">
                <label>Confirm Password</label>
                <div className="input-group-wrapper-register">
                  <Lock size={20} color="#27489E" fill="#fff" />
                  <input type="password" placeholder="Confirma tu contraseña..." value={confirm} onChange={e=>setConfirm(e.target.value)} required />
                </div>
              </div>

              {/* El tipo se asigna automáticamente como 'operador' */}

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

              {error && <div style={{color:'red', marginBottom:10}}>{error}</div>}
              {success && <div style={{color:'green', marginBottom:10}}>{success}</div>}

              <div className="action-register">
                <button className="register-btn" type="submit">Registrarse</button>
              </div>
            </form>

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
