import React, { useState } from "react";
import { Volume2, Play } from "lucide-react";
import "./EfectosProductor.css";
import Sidebar from "../../sidebar/Sidebar";

const fxInstitucionales = [
  {
    title: "Intro Noticias",
    duration: "00:08",
    type: "Institucional",
    label: "intro",
    labelClass: "intro",
  },
  {
    title: "Separador Comercial",
    duration: "00:20",
    type: "Institucional",
    label: "separator",
    labelClass: "separator",
  },
  {
    title: "Cierre Programa",
    duration: "00:02",
    type: "Institucional",
    label: "outro",
    labelClass: "outro",
  },
  {
    title: "Identificación Emisora",
    duration: "00:02",
    type: "Institucional",
    label: "id",
    labelClass: "id",
  },
  {
    title: "Aspend 102.3",
    duration: "3:20",
    type: "Institucional",
    label: "id",
    labelClass: "id",
  },
  {
    title: "Spotfite",
    duration: "10:00",
    type: "Institucional",
    label: "id",
    labelClass: "id",
  },
];

function EfectosProductor() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const rol = "productor";
  const filtered = fxInstitucionales.filter((fx) => {
    const searchText = search ? search.toLowerCase() : "";
    const matchesSearch =
      fx.title.toLowerCase().includes(searchText) ||
      fx.type.toLowerCase().includes(searchText) ||
      fx.label.toLowerCase().includes(searchText);
    const matchesCategory =
      !category ||
      (category === "Intro" && fx.labelClass === "intro") ||
      (category === "Outro" && fx.labelClass === "outro") ||
      (category === "Separator" && fx.labelClass === "separator") ||
      (category === "Id" && fx.labelClass === "id");
    return matchesSearch && matchesCategory;
  });
  return (
    <div className="dashboard-root">
      <Sidebar active="efectos" userType={rol} userName="Productor" />
      <div className="container">
        <div className="container-bg" />
        <main className="main-container">
          <div className="efp-library">
            <div className="efp-library-title">
              <h2>🎧 FX Institucionales</h2>
              <input
                type="text"
                placeholder="Buscar FX..."
                className="efp-search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
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
            </div>
          </div>
        </main>
      </div>
    </div>

  );
}

export default EfectosProductor;
