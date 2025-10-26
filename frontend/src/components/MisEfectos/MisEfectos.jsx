import React from "react";
import { useNavigate } from "react-router-dom";
import "./MisEfectos.css";
import { Play } from "lucide-react";

const MisEfectos = ({ userType = "operador", userName = "Pepe Pascal" }) => {
  const navigate = useNavigate();

  // Definir las secciones según rol
  const secciones = [];

  // Programas institucionales solo para admin
  if (userType === "admin") {
    secciones.push({
      titulo: "Programas Institucionales",
      etiqueta: "institucional",
      programas: [
        {
          id: 1,
          nombre: "Noticiero RadioX",
          usuario: "Radio Aspen",
          fx: [
            "/audios/noticiero_intro.mp3",
            "/audios/noticiero_cierre.mp3",
            "/audios/noticiero_alerta.mp3",
          ],
        },
      ],
    });
  }

  // Programas personales para todos los roles
  secciones.push({
    titulo: "Mis Programas",
    etiqueta: "personal",
    programas: [
      {
        id: 2,
        nombre: "Sensless FM",
        usuario: userName,
        fx: [
          "/audios/sensless_intro.mp3",
          "/audios/sensless_break.mp3",
          "/audios/sensless_outro.mp3",
        ],
      },
    ],
  });

  const handleOpen = (programa) => {
    navigate("/mis-efectos-audio", { state: { programa } });
  };

  const handlePlay = (programa) => {
    if (programa.fx && programa.fx[0]) {
      const audio = new Audio(programa.fx[0]);
      audio.play();
    }
  };

  return (
    <div className="mis-efectos-container">
      {secciones.map((sec, idx) => (
        <div key={idx} className="mis-efectos-section">
          <div className="mis-efectos-header">
            <h2>{sec.titulo}</h2>
            <span className={`mis-efectos-tag ${sec.etiqueta}`}>
              {sec.etiqueta}
            </span>
          </div>

          <div className="mis-efectos-grid">
            {sec.programas.map((p) => (
              <div
                key={p.id}
                className="mis-efectos-card"
                onClick={() => handleOpen(p)}
              >
                <div className="mis-efectos-thumb">
                  <button
                    className="mis-efectos-play-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlay(p);
                    }}
                  >
                    <Play size={20} fill="#fff" />
                  </button>
                </div>
                <div className="mis-efectos-info">
                  <h3>{p.nombre}</h3>
                  <p>{p.usuario}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MisEfectos;
