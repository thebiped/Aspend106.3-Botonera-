import React, { useRef, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import { Volume2, Edit2, X, Play } from "lucide-react";
import "./MisEfectos.css";
import AddFxModal from "./modal/AddFxModal";

const fxList = [
  {
    title: "Mi Intro Personal",
    program: "Programa Matutino",
    duration: "00:05",
    tags: ["intro"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
  {
    title: "Transición Especial",
    program: "Tarde Musical",
    duration: "00:05",
    tags: ["transition"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
  {
    title: "Efecto Personalizado 1",
    program: "Personal",
    duration: "00:08",
    tags: ["special"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
  {
    title: "Mi Separador",
    program: "Programa Matutino",
    duration: "00:04",
    tags: ["special"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
  {
    title: "Sonido Único",
    program: "Personal",
    duration: "00:07",
    tags: ["separator"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
  {
    title: "Intro Alternativa",
    program: "Tarde Musical",
    duration: "00:12",
    tags: ["intro"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
];

function MisEfectos() {
  const audioRef = useRef(null);
  const [playingIdx, setPlayingIdx] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePlay = (idx, audioUrl) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(audioUrl);
    audioRef.current.play();
    setPlayingIdx(idx);
    audioRef.current.onended = () => setPlayingIdx(null);
  };

  return (
    <div className="dashboard-root">
      <Sidebar active="mis-efectos" userType="operador" userName="Pepe Pascal" />
      <div className="container">
        <div className="container-bg" />
        <main className="main-container">
          <div className="me-library">
            <div className="me-library-header">
              <h2>🎧 Mis Efectos</h2>
              <button className="me-add-btn" onClick={() => setModalOpen(true)}>
                + Agregar FX
              </button>
            </div>
            <div className="me-list">
              {fxList.map((fx, i) => (
                <div key={i} className="me-item">
                  {/* Botón reproducir */}
                  <button
                    className={`me-play-btn ${playingIdx === i ? "playing" : ""}`}
                    onClick={() => handlePlay(i, fx.audio)}
                  >
                    <Play size={18} />
                  </button>

                  {/* Icono con duración */}
                  <div className="me-icon">
                    <Volume2 size={28} />
                    <span className="me-duration">{fx.duration}</span>
                  </div>

                  {/* Info */}
                  <div className="me-info">
                    <h3 className="me-title">{fx.title}</h3>
                    <p className="me-meta">
                      {fx.program} •{" "}
                      {fx.tags.map((tag, idx) => (
                        <span key={idx} className={`me-label ${tag.toLowerCase()}`}>
                          {tag}
                        </span>
                      ))}
                    </p>
                  </div>

                  {/* Botones editar y eliminar */}
                  <div className="me-actions">
                    <button className="me-edit">
                      <Edit2 size={16} />
                    </button>
                    <button className="me-delete">
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ))}
              {fxList.length === 0 && (
                <p className="me-empty">No hay efectos disponibles.</p>
              )}
            </div>
          </div>
        </main>
      </div>
      {modalOpen && <AddFxModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default MisEfectos;
