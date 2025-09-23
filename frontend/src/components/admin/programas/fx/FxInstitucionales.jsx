import React from "react";
import { Volume2, Play } from "lucide-react";
import "../../../../assets/css/Admins/Programas.css";

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

function FxInstitucionales({ search, category, setCategory }) {
  const filtered = fxInstitucionales.filter((fx) => {
    const searchText = search.toLowerCase();
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
          FX Institucionales
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

export default FxInstitucionales;
