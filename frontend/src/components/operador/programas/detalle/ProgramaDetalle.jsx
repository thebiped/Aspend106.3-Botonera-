import React, { useRef, useState, useEffect } from "react";
import Sidebar from "../../../sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { Volume2, Play, Edit2, X } from "lucide-react";
import "./ProgramaDetalle.css";

const programas = [
  {
    nombre: "Programa Matutino",
    tipo: "Programa",
    fx: [
      { title: "Intro Noticias", duration: "00:05", tags: ["intro"], audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3" },
      { title: "Transición Musical", duration: "00:04", tags: ["transition"], audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3" },
      { title: "Cierre Segmento", duration: "00:08", tags: ["outro"], audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3" },
    ],
  },
  {
    nombre: "Tarde Musical",
    tipo: "Programa",
    fx: [
      { title: "Intro Tarde", duration: "00:12", tags: ["intro"], audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3" },
      { title: "Separador Canciones", duration: "00:03", tags: ["separator"], audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3" },
      { title: "Efecto Especial", duration: "00:06", tags: ["special"], audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3" },
    ],
  },
  {
    nombre: "Noticias Centrales",
    tipo: "Programa",
    fx: [
      { title: "Intro Tarde", duration: "00:12", tags: ["intro"], audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3" },
      { title: "Separador Canciones", duration: "00:03", tags: ["separator"], audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3" },
      { title: "Efecto Especial", duration: "00:06", tags: ["special"], audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3" },
    ],
  },
];

function ProgramaDetalle() {
  const { id } = useParams();
  const programa = programas[parseInt(id, 10)];
  const audioRef = useRef(null);
  const [playingIdx, setPlayingIdx] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  if (!programa) return <div>Programa no encontrado</div>;

  const handlePlay = (idx, audioUrl) => {
    if (audioRef.current) audioRef.current.pause();
    audioRef.current = new Audio(audioUrl);
    audioRef.current.play();
    setPlayingIdx(idx);
    audioRef.current.onended = () => setPlayingIdx(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowLibrary(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (showLibrary) {
      programas.forEach((_, i) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, i]);
        }, 800 + i * 200); 
      });
    }
  }, [showLibrary, programas]);

  return (
    <div className="dashboard-root">
      <Sidebar active={1} userType="operador" userName="Pepe Pascal" />
      <div className="container">
        <div className="container-bg"></div>
        <main className="main-container">
          <div className="pd-container-programa">
            {/* Header del programa */}
            <header className="pd-programs-header-details">
              <h2 className="pd-title">{programa.nombre}</h2>
              <span className={`pd-programa-tipo-label tipo-${programa.tipo.toLowerCase()}`}>
                {programa.tipo}
              </span>
            </header>

            {/* Biblioteca de FX */}
            <section className={`me-library ${showLibrary ? "show" : ""}`}>
              <div className="me-library-header">
                <h2>🎧 FX del Programa</h2>
                <button className="me-add-btn" onClick={() => setModalOpen(true)}>
                  + Agregar FX
                </button>
              </div>

              <div className="me-list">
                {programa.fx.length === 0 ? (
                  <p className="me-empty">No hay FX asignados.</p>
                ) : (
                  programa.fx.map((fx, i) => (
                    <div key={i} className={`me-item ${visibleItems.includes(i) ? "show" : ""}`}>

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
                          {programa.nombre} •{" "}
                          {fx.tags.map((tag, idx) => (
                            <span key={idx} className={`me-label ${tag.toLowerCase()}`}>
                              {tag}
                            </span>
                          ))}
                        </p>
                      </div>

                      {/* Acciones */}
                      <div className="me-actions">
                        <button className="me-edit">
                          <Edit2 size={16} />
                        </button>
                        <button className="me-delete">
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
      {modalOpen && <AddFxModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default ProgramaDetalle;
