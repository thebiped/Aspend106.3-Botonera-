import React from "react";

import { Volume2, Play } from "lucide-react";
import "../../../../assets/css/Admins/Programas.css";

const fxProgramas = [
  {
    title: "Intro Matutino",
    duration: "00:05",
    type: "Programa Matutino",
    label: "intro",
    labelClass: "intro",
  },
  {
    title: "Transición Musical",
    duration: "1:00",
    type: "Tarde Musical",
    label: "transition",
    labelClass: "transition",
  },
  {
    title: "Efecto Deportes",
    duration: "0:40",
    type: "Deportes en Vivo",
    label: "special",
    labelClass: "special",
  },
  {
    title: "RadioHead",
    duration: "1:40h",
    type: "Podcast en Vivo",
    label: "special",
    labelClass: "special",
  },
  {
    title: "OPP of OPP",
    duration: "1:00h",
    type: "Podcast en Vivo",
    label: "special",
    labelClass: "special",
  },
];

function FxProgramas({ search, category, setCategory }) {
  const filtered = fxProgramas.filter((fx) => {
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
      (category === "Id" && fx.labelClass === "id") ||
      (category === "Transition" && fx.labelClass === "transition") ||
      (category === "Special" && fx.labelClass === "special");
    return matchesSearch && matchesCategory;
  });
  return (
    <section className="effects-library">
      <div
        className="effects-library-title"
        style={{ display: "flex", alignItems: "center", gap: 16 }}
      >
        <span style={{ display: "flex", alignItems: "center" }}>
          <Volume2
            size={20}
            style={{ marginRight: 8, verticalAlign: "middle" }}
          />{" "}
          FX de Programas
        </span>
        <select
          className="programs-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ marginLeft: "auto", minWidth: 160 }}
        >
          <option value="">Todas las categorías</option>
          <option value="Intro">Intro</option>
          <option value="Outro">Outro</option>
          <option value="Separator">Separator</option>
          <option value="Id">Id</option>
          <option value="Transition">Transition</option>
          <option value="Special">Special</option>
        </select>
      </div>
      <div className="effects-cards">
        {filtered.map((fx, i) => (
          <div className="effect-card" key={i}>
            <div className="effect-card-content">
              <span className="effect-card-icon">
                <Volume2 size={25} />
              </span>
              <div className="content-info">
                <span className="effect-card-title">{fx.title}</span>
                <div className="effect-card-meta">
                  <span>{fx.duration}</span>
                  <span>{fx.type}</span>
                  <span className={`effect-card-label ${fx.labelClass}`}>
                    {fx.label}
                  </span>
                </div>
              </div>
            </div>
            <div className="effect-card-actions">
              <button className="effect-card-play">
                <Play size={16} /> Reproducir
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FxProgramas;
