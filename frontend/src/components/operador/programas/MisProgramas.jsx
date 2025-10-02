import Sidebar from "../../sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import "./MisProgramas.css";
import { AudioLines, Play, Volume2 } from "lucide-react";

const programas = [
  {
    nombre: "Programa Matutino",
    tipo: "Programa",
    fx: [
      { titulo: "Intro Noticias", duracion: "00:05" },
      { titulo: "Transición Musical", duracion: "00:04" },
      { titulo: "Cierre Segmento", duracion: "00:08" },
    ],
  },
  {
    nombre: "Tarde Musical",
    tipo: "Programa",
    fx: [
      { titulo: "Intro Tarde", duracion: "00:12" },
      { titulo: "Separador Canciones", duracion: "00:03" },
      { titulo: "Efecto Especial", duracion: "00:06" },
    ],
  },
  {
    nombre: "Noticias Centrales",
    tipo: "Programa",
    fx: [
      { titulo: "Intro Tarde", duracion: "00:12" },
      { titulo: "Separador Canciones", duracion: "00:03" },
      { titulo: "Efecto Especial", duracion: "00:06" },
    ],
  },
];

function MisProgramas() {
  const navigate = useNavigate();

  return (
     <div className="dashboard-root">
      <Sidebar active={1} userType="operador" userName="Pepe Pascal" />
      <div className="container">
        <div className="container-bg"></div>

        <header className="mp-header">
          <h1 className="mp-title">Programas Asignados</h1>
          <p className="mp-description">
            Consulta y gestiona los programas que tienes a tu cargo, con acceso
            directo a sus recursos y horarios.
          </p>
        </header>

        <main className="main-container">
          <section className="mp-programas-section">
            {programas.map((prog, idx) => (
              <div key={idx} className="mp-programa-container noselect">
                <div className="canvas">
                  {Array.from({ length: 25 }, (_, i) => (
                    <div key={i} className={`tracker tr-${i + 1}`}></div>
                  ))}

                  <button
                    className="mp-programa-card-btn"
                    onClick={() => navigate(`/programa/${idx}`)}
                  >
                    <AudioLines size={24} className="mp-logo-sound" />

                    <span
                      className={`mp-programa-categoria tipo-${prog.tipo.toLowerCase()}`}
                    >
                      {prog.tipo}
                    </span>

                    <button className="mp-play-btn">
                      <Play size={24} color="#fff" />
                    </button>

                    <div className="mp-programa-info">
                      <span className="mp-programa-nombre">{prog.nombre}</span>
                      <span className="mp-programa-creador">by Pepe Pascal</span>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default MisProgramas;
