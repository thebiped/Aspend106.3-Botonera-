import React, { useState } from "react";
import { Volume2, Play, Search, AudioLines } from "lucide-react";
import "./EfectosProductor.css";
import Sidebar from "../../sidebar/Sidebar";

const fxInstitucionales = [
  {
    title: "Intro Noticias",
    duration: "00:08",
    type: "Institucional",
    label: "Intro",
    labelClass: "intro",
  },
  {
    title: "Separador Comercial",
    duration: "00:20",
    type: "Institucional",
    label: "Separator",
    labelClass: "separator",
  },
  {
    title: "Cierre Programa",
    duration: "00:02",
    type: "Institucional",
    label: "Outro",
    labelClass: "outro",
  },
  {
    title: "Identificación Emisora",
    duration: "00:02",
    type: "Institucional",
    label: "ID",
    labelClass: "id",
  },
  {
    title: "Aspend 102.3",
    duration: "03:20",
    type: "Institucional",
    label: "ID",
    labelClass: "id",
  },
  {
    title: "Spotfite",
    duration: "10:00",
    type: "Institucional",
    label: "ID",
    labelClass: "id",
  },
];

function EfectosProductor() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const rol = "productor";

  const filtered = fxInstitucionales.filter((fx) => {
    const searchText = search.toLowerCase();
    const matchesSearch =
      fx.title.toLowerCase().includes(searchText) ||
      fx.type.toLowerCase().includes(searchText) ||
      fx.label.toLowerCase().includes(searchText);

    const matchesCategory =
      !category ||
      fx.labelClass.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="dashboard-root">
      <Sidebar active="efectos" userType={rol} userName="Productor" />

      <div className="container">
        <div className="container-bg" />

        <main className="main-container">
          <div className="efp-library">
            <div className="efp-library-header">
              <div className="efp-library-title">
                <h2><AudioLines size={20}/> FX Institucionales</h2>
              </div>

              <div className="efp-library-filters">
                <div className="efp-input-group">
                  <div className="efp-input-wrapper">
                    <Search size={18} color="#b8b8b8" />
                    <input id="efp-search" type="text" placeholder="Buscar me..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                  </div>
                </div>

                <div className="efp-input-select">
                  <div className="efp-input-select-wrapper">
                    <Search size={18} color="#b8b8b8" />
                    <select id="efp-filter" value={filtered} onChange={(e) => setFilter(e.target.value)}>
                      <option value="all">Todos</option>
                      <option value="intro">Intro</option>
                      <option value="special">Especial</option>
                      <option value="separator">Separador</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="efp-list">
              {filtered.map((fx, i) => (
                <div key={i} className="efp-item">
                  <button className="efp-play-btn">
                    <Play size={18} />
                  </button>

                  <div className="efp-icon">
                    <Volume2 size={28} />
                    <span className="efp-duration">{fx.duration}</span>
                  </div>

                  <div className="efp-info">
                    <h3 className="efp-title">{fx.title}</h3>
                    <p className="efp-meta">
                      {fx.type} • <span className="efp-label">{fx.label}</span>
                    </p>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <p className="efp-empty">No se encontraron resultados.</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EfectosProductor;
