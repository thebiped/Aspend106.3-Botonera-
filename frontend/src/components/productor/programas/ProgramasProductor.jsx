import React, { useEffect, useState, useRef } from "react";
import { Volume2, Play } from "lucide-react";
import "./ProgramasProductor.css";
import Sidebar from "../../sidebar/Sidebar";

const fxProgramas = [
  {
    title: "Intro Matutino",
    duration: "00:05",
    type: "Programa Matutino",
    label: "intro",
  },
  {
    title: "Transición Musical",
    duration: "01:00",
    type: "Tarde Musical",
    label: "transition",
  },
  {
    title: "Efecto Deportes",
    duration: "00:40",
    type: "Deportes en Vivo",
    label: "special",
  },
  {
    title: "RadioHead",
    duration: "01:40h",
    type: "Podcast en Vivo",
    label: "special",
  },
  {
    title: "OPP of OPP",
    duration: "01:00h",
    type: "Podcast en Vivo",
    label: "separator",
  },
];

function ProgramasProductor() {
  const [showLibrary, setShowLibrary] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [playingIdx, setPlayingIdx] = useState(null);
  const audioRef = useRef(null);

  const handlePlay = (idx) => {
    if (audioRef.current) audioRef.current.pause();
    audioRef.current = new Audio("https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3");
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
      fxProgramas.forEach((_, i) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, i]);
        }, 600 + i * 200);
      });
    }
  }, [showLibrary]);

  return (
    <div className="dashboard-root">
      <Sidebar active="programas-productor" userType="productor" userName="Pepe Pascal" />

      <div className="container">
        <div className="container-bg"></div>

        <header className="pp-header">
          <div className="pp-header-info">
            <h1 className="pp-title">Programas Asignados</h1>
            <p className="pp-desc">Consulta y gestiona los programas a tu cargo.</p>
          </div>
        </header>

        <main className="main-container">
          <section className={`pp-library ${showLibrary ? "show" : ""}`}>
            <div className="pp-list">
              {fxProgramas.map((fx, i) => (
                <div key={i} className={`pp-item ${visibleItems.includes(i) ? "show" : ""}`}>
                  <button className={`pp-play-btn ${playingIdx === i ? "playing" : ""}`} onClick={() => handlePlay(i)}>
                    <Play size={18} />
                  </button>
                  {/* Icono principal */}
                  <div className="pp-icon">
                    <Volume2 size={26} color="#fff"/>
                    <span className="pp-duration">{fx.duration}</span>
                  </div>

                  {/* Info */}
                  <div className="pp-info">
                    <h3 className="pp-item-title">{fx.title}</h3>
                    <p className="pp-item-meta">
                      {fx.type} • <span className={`pp-label ${fx.label}`}>{fx.label}</span>
                    </p>
                  </div>

                </div>
              ))}
              {fxProgramas.length === 0 && <p className="pp-empty">No hay programas asignados.</p>}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProgramasProductor;
