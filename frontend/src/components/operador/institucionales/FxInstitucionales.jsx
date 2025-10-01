import Sidebar from "../../sidebar/Sidebar";
import { Volume2 } from "lucide-react";
import "./FxInstitucionales.css";

const fxList = [
  {
    title: "Intro Noticias",
    duration: "00:05",
    tags: ["intro", "Noticias"],
  },
  {
    title: "Separador Comercial",
    duration: "00:03",
    tags: ["separator", "General"],
  },
  {
    title: "Cierre Programa",
    duration: "00:08",
    tags: ["otro", "General"],
  },
  {
    title: "Identificación Emisora",
    duration: "00:12",
    tags: ["id", "Institucional"],
  },
  {
    title: "Intro Deportes",
    duration: "00:06",
    tags: ["intro", "Deportes"],
  },
  {
    title: "Transición Noticias",
    duration: "00:04",
    tags: ["transition", "Noticias"],
  },
];

function FxInstitucionales({ rol = "operador" }) {
  return (
    <div className="dashboard-root">
      <Sidebar
        active={3}
        userType={rol === "productor" ? "productor" : "operador"}
        userName={rol === "productor" ? "Productor" : "Pepe Pascal"}
      />
      <div className="container">
        <div className="container-bg"></div>
        <div className="main-container">
          <header className="header">
            <h1 className="title">Efectos Institucionales</h1>
            <p className="description">
              Accede a la biblioteca de efectos oficiales de la emisora,
              disponibles para todos los operadores.
            </p>
          </header>
          <section className="fx-section">
            <h2 className="fx-section-title">Biblioteca Institucional</h2>
            <div className="fx-cards-grid">
              {fxList.map((fx, idx) => (
                <div className="fx-card" key={idx}>
                  <div className="fx-card-header">
                    <span className="fx-card-icon">
                      <Volume2 size={24} />
                    </span>
                    <span className="fx-card-title">{fx.title}</span>
                  </div>
                  <div className="fx-card-info">
                    <span className="fx-card-duration">{fx.duration}</span>
                    <div className="fx-card-tags">
                      {fx.tags.map((tag, i) => (
                        <span
                          className={`fx-tag fx-tag-${tag.toLowerCase()}`}
                          key={i}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {rol !== "productor" && (
                    <button className="fx-card-play">▶ Reproducir</button>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FxInstitucionales;
