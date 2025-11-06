import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Play, Volume2, ArrowLeft } from "lucide-react";
import "./MisEfectosAudio.css";

const MisEfectosAudio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { programa } = location.state || {};

  const user = JSON.parse(localStorage.getItem("user"));
  const userRole = user?.role || "operador";

  const audioRef = useRef(null);
  const [playingIdx, setPlayingIdx] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (programa?.fx?.length) {
      programa.fx.forEach((_, i) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, i]);
        }, i * 150);
      });
    }
  }, [programa]);

  if (!programa)
    return <p className="no-programa">⚠️ No hay programa seleccionado.</p>;

  const handlePlay = (idx) => {
    if (!programa.fx[idx]) return;

    if (audioRef.current) audioRef.current.pause();

    const newAudio = new Audio(programa.fx[idx]);
    newAudio.play();
    setPlayingIdx(idx);
    audioRef.current = newAudio;

    newAudio.onended = () => setPlayingIdx(null);
  };

  const handleBack = () => {
    const roleRoutes = {
      admin: "/admin/mis-efectos",
      operador: "/operador/mis-efectos",
      productor: "/productor/mis-efectos",
    };
    navigate(roleRoutes[userRole] || "/");
  };

  return (
    <div className="misefectos-audio">
      <div className="me-library show">
        {/* BOTÓN VOLVER */}
        <button className="fx-back-btn" onClick={handleBack}>
          <ArrowLeft size={18} /> Volver
        </button>

        {/* CABECERA */}
        <div className="me-library-header">
          <h2>🎶 {programa.nombre}</h2>
          <p>Usuario: {programa.usuario}</p>
        </div>

        {/* LISTA DE EFECTOS */}
        <div className="me-list">
          {programa.fx.map((fxUrl, idx) => (
            <div
              key={idx}
              className={`me-item ${visibleItems.includes(idx) ? "show" : ""}`}
            >
              {/* BOTÓN PLAY */}
              <button
                className={`me-play-btn ${
                  playingIdx === idx ? "playing" : ""
                }`}
                onClick={() => handlePlay(idx)}
              >
                <Play size={18} />
              </button>

              {/* ICONO */}
              <div className="me-icon">
                <Volume2 size={28} />
                <span className="me-duration">
                  {Math.floor(Math.random() * 0.5 * 60)
                    .toString()
                    .padStart(2, "0")}
                  :0{Math.floor(Math.random() * 10)}
                </span>
              </div>

              {/* INFO */}
              <div className="me-info">
                <h3 className="me-title">{fxUrl.split("/").pop()}</h3>
                <p className="me-meta">
                  {programa.nombre} • <span className="me-label intro">FX</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MisEfectosAudio;
