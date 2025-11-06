import React, { useRef, useState } from "react";
import Sidebar from "../../../../sidebar/Sidebar";
import { Volume2, Play, Search } from "lucide-react";
import "./Fxinstitucionales.css"; 
import AddFxModal from "../../modal/AddFxModal";

const fxList = [
  {
    title: "Mensaje Institucional 1",
    program: "Noticias",
    duration: "00:08",
    tags: ["intro"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
  {
    title: "Aviso Especial",
    program: "Avisos",
    duration: "00:05",
    tags: ["special"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
  {
    title: "Recordatorio Diario",
    program: "Recordatorios",
    duration: "00:06",
    tags: ["separator"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
];

function FxInstitucional() {
  const audioRef = useRef(null);
  const [playingIdx, setPlayingIdx] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);

  const handlePlay = (idx, audioUrl) => {
    if (audioRef.current) audioRef.current.pause();
    audioRef.current = new Audio(audioUrl);
    audioRef.current.play();
    setPlayingIdx(idx);
    audioRef.current.onended = () => setPlayingIdx(null);
  };

  // Filtrado
  const filteredFx = fxList.filter((fx) => {
    const matchesSearch = fx.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || fx.tags.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="fxai-library">
      <div className="fxai-library-header">
        <h2>🎧 FX Institucional</h2>
        <button className="sparkle-button" onClick={() => setModalOpen(true)}>
          + Agregar FX
          <span className="spark"></span>
          <span className="backdrop"></span>
        </button>
      </div>

      {/* Filtros */}
      <div className="fxai-library-filters">
        <div className="fxai-input-group">
          <div className="fxai-input-wrapper">
            <Search size={18} color="#b8b8b8" />
            <input id="fxai-search" type="text" placeholder="Buscar me..." value={search} onChange={(e) => setSearch(e.target.value)}/>
          </div>
        </div>

        <div className="fxai-input-select">
          <div className="fxai-input-select-wrapper">
            <Search size={18} color="#b8b8b8" />
            <select id="fxai-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Todos</option>
              <option value="intro">Intro</option>
              <option value="special">Especial</option>
              <option value="separator">Separador</option>
            </select>
          </div>
        </div>
      </div>

      <div className="fxai-list">
        {filteredFx.length > 0 ? (
          filteredFx.map((fx, i) => (
            <div key={i} className="fxai-item">
              <button
                className={`fxai-play-btn ${playingIdx === i ? "playing" : ""}`}
                onClick={() => handlePlay(i, fx.audio)}
              >
                <Play size={18} />
              </button>

              <div className="fxai-icon">
                <Volume2 size={28} />
                <span className="fxai-duration">{fx.duration}</span>
              </div>

              <div className="fxai-info">
                <h3 className="fxai-title">{fx.title}</h3>
                <p className="fxai-meta">
                  {fx.program} •{" "}
                  {fx.tags.map((tag, idx) => (
                    <span key={idx} className={`fxai-label ${tag.toLowerCase()}`}>
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="fxai-empty">No hay efectos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default FxInstitucional;
