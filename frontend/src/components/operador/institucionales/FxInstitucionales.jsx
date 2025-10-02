import React, { useRef, useState, useEffect } from "react";
import Sidebar from "../../sidebar/Sidebar";
import { Volume2, Play } from "lucide-react";
import "./FxInstitucionales.css";

const fxList = [
  {
    title: "Intro Noticias",
    duration: "00:05",
    tags: ["intro", "Noticias"],
  },
  {
    title: "Separador Comercial",
    duration: "00:03",
    tags: ["separator", "General"],
  },
  {
    title: "Cierre Programa",
    duration: "00:08",
    tags: ["otro", "General"],
  },
  {
    title: "Identificación Emisora",
    duration: "00:12",
    tags: ["id", "Institucional"],
  },
  {
    title: "Intro Deportes",
    duration: "00:06",
    tags: ["intro", "Deportes"],
  },
  {
    title: "Transición Noticias",
    duration: "00:04",
    tags: ["transition", "Noticias"],
  },
];

function FxInstitucionales({ rol = "operador" }) {
  const audioRef = useRef(null);
  const [playingIdx, setPlayingIdx] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const handlePlay = (idx, audioUrl) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(audioUrl || "");
    audioRef.current.play();
    setPlayingIdx(idx);
    audioRef.current.onended = () => setPlayingIdx(null);
  };

  useEffect(() => {
    fxList.forEach((_, i) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, i]);
      }, i * 200); 
    });
  }, []);

  return (
    <div className="dashboard-root">
      <Sidebar
        active={3}
        userType={rol === "productor" ? "productor" : "operador"}
        userName={rol === "productor" ? "Productor" : "Pepe Pascal"}
      />
      <div className="container">
        <div className="container-bg"></div>
          <header className="fx-header">
            <h1 className="fx-title">Efectos Institucionales</h1>
            <p className="fx-description">
              Accede a la biblioteca de efectos oficiales de la emisora,
              disponibles para todos los operadores.
            </p>
          </header>
        <div className="main-container">

          {/* 🔹 Sección en GRID */}
          <section className="fx-section">
            <h2 className="fx-section-title">Biblioteca en Lista</h2>
            <div className="fx-list">
              {fxList.map((fx, idx) => (
                <div key={idx} className={`fx-list-item ${visibleItems.includes(idx) ? "show" : ""}`} style={{ animationDelay: `${0.2 + idx * 0.15}s` }} 
                >
                  <button
                    className={`fx-list-play ${playingIdx === idx ? "playing" : ""}`}
                    onClick={() => handlePlay(idx)}
                  >
                    <Play size={18} />
                  </button>
                  <div className="fx-list-icon">
                    <Volume2 size={26} color="#fff" />
                    <span className="fx-list-duration">{fx.duration}</span>
                  </div>
                  <div className="fx-list-info">
                    <h3 className="fx-list-title">{fx.title}</h3>
                    <p className="fx-list-tags">
                      {fx.tags.map((tag, i) => (
                        <span key={i} className={`fx-list-label ${tag.toLowerCase()}`}>
                          {tag}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default FxInstitucionales;
