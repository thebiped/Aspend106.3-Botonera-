import React from "react";
import { useNavigate } from "react-router-dom";
import { Play } from "lucide-react";
import "./BibliotecaFX.css";

const BibliotecaFX = ({ userType = "operador" }) => {
  const navigate = useNavigate();

  const secciones = [
    {
      titulo: "Programas Institucionales",
      categoria: "institucional",
      playlist: [
        {
          nombre: "Sonido Nacional",
          usuario: "admin",
          fx: [
            "/fx/sonido1.mp3",
            "/fx/sonido2.mp3",
            "/fx/sonido3.mp3",
          ],
        },
        {
          nombre: "Voces del Pueblo",
          usuario: "admin",
          fx: ["/fx/voces1.mp3", "/fx/voces2.mp3"],
        },
      ],
    },
    {
      titulo: "Programas Urbanos",
      categoria: "urbano",
      playlist: [
        {
          nombre: "Ciudad Beat",
          usuario: "juan_tech",
          fx: ["/fx/ciudad1.mp3", "/fx/ciudad2.mp3"],
        },
        {
          nombre: "Calles Sonoras",
          usuario: "maria_sound",
          fx: ["/fx/calles1.mp3"],
        },
      ],
    },
  ];

  const handlePlayFirstFX = (fxList) => {
    if (fxList.length) {
      const audio = new Audio(fxList[0]);
      audio.play();
    }
  };

  const handleOpenPrograma = (programa) => {
    navigate("/biblioteca-fx-audio", { state: { programa } });
  };

  return (
    <div className="biblioteca-container">
      {secciones.map((sec, index) => (
        <div key={index} className="biblioteca-section">
          <h2>{sec.titulo}</h2>
          <div className="biblioteca-grid">
            {sec.playlist.map((prog, i) => (
              <div
                key={i}
                className="biblioteca-card"
                onClick={() => handleOpenPrograma(prog)}
              >
                <div className="color-fondo">
                  <button
                    className="btn-play"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayFirstFX(prog.fx);
                    }}
                  >
                    <Play size={20} fill="#fff" />
                  </button>
                </div>
                <h3>{prog.nombre}</h3>
                <p>{prog.usuario}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BibliotecaFX;
