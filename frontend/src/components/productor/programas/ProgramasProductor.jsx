// Contenedor principal
import React, { useState } from "react";
import { Volume2, Play } from "lucide-react";
import "./ProgramasProductor.css";
import Sidebar from "../../sidebar/Sidebar";

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

function ProgramasProductor() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const rol = "productor";
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
    <div className="dashboard-root">
      <Sidebar active={1} userType="operador" userName="Pepe Pascal" />
      <div className="container">
        <div className="container-bg"></div>

        <header className="mp-header">
          <h1 className="mp-title">Programas Asignados</h1>
          <p className="mp-description">
            Consulta y gestiona los programas que tienes a tu cargo.
          </p>
        </header>

        <main className="main-container">
          <section className="mp-programas-section">
            {programas.map((prog, idx) => (
              <div key={idx} className="mp-card-wrapper">
                <div
                  className="mp-programa-card"
                  style={{ backgroundImage: `url(${prog.imagen})` }}
                >
                  <Volume2 className="mp-card-icon" />
                  <button
                    className="mp-card-play"
                    onClick={() => navigate(`/programa/${idx}`)}
                  >
                    <Play size={28} />
                  </button>
                  <div className="mp-card-info">
                    <span className="mp-card-title">{prog.nombre}</span>
                    <span className="mp-card-creator">by {prog.creador}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProgramasProductor;
