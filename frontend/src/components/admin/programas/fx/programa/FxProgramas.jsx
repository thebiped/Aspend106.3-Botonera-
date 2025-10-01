import React, { useRef, useState } from "react";
import Sidebar from "../../../../sidebar/Sidebar";
import { Volume2, Play, Search } from "lucide-react";
import "./FxProgramas.css"; 
import AddFxModal from "../../modal/AddFxModal";

const fxList = [
  {
    title: "Intro Programa Matutino",
    program: "Matutino",
    duration: "00:06",
    tags: ["intro"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
  {
    title: "Transición Tarde Musical",
    program: "Tarde Musical",
    duration: "00:05",
    tags: ["transition"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
  {
    title: "Separador Especial",
    program: "Matutino",
    duration: "00:04",
    tags: ["separator"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
  {
    title: "Efecto Final Programa",
    program: "Tarde Musical",
    duration: "00:07",
    tags: ["special"],
    audio: "https://cdn.pixabay.com/audio/2022/10/16/audio_12b6b1b7b7.mp3",
  },
];

function FxProgramas() {
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

  const filteredFx = fxList.filter((fx) => {
    const matchesSearch = fx.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || fx.tags.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="me-library">
      <div className="me-library-header">
        <h2>🎧 FX Programas</h2>
        <button className="me-add-btn" onClick={() => setModalOpen(true)}>
          + Agregar FX
        </button>
      </div>

      {/* Filtros */}
      <div className="me-library-filters">
        <div className="me-input-group">
          <div className="me-input-wrapper">
            <Search size={18} color="#b8b8b8" />
            <input id="me-search" type="text" placeholder="Buscar me..." value={search} onChange={(e) => setSearch(e.target.value)}/>
          </div>
        </div>

        <div className="me-input-select">
          <div className="me-input-select-wrapper">
            <Search size={18} color="#b8b8b8" />
            <select id="me-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">Todos</option>
              <option value="intro">Intro</option>
              <option value="special">Especial</option>
              <option value="separator">Separador</option>
            </select>
          </div>
        </div>
      </div>


      <div className="me-list">
        {filteredFx.length > 0 ? (
          filteredFx.map((fx, i) => (
            <div key={i} className="me-item">
              <button
                className={`me-play-btn ${playingIdx === i ? "playing" : ""}`}
                onClick={() => handlePlay(i, fx.audio)}
              >
                <Play size={18} />
              </button>

              <div className="me-icon">
                <Volume2 size={28} />
                <span className="me-duration">{fx.duration}</span>
              </div>

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
            </div>
          ))
        ) : (
          <p className="me-empty">No hay efectos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default FxProgramas;
