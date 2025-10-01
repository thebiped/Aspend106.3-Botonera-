import { Home, ListMusic, Waves, Radio } from "lucide-react";
import "./Dashboard.css";
import Sidebar from "../../sidebar/Sidebar";

function DashboardOperador() {
  return (
    <div className="dashboard-root">
      <Sidebar
        active={0}
        userType="jefe-operador"
        userName="Jose Alberto Plasma"
      />
      <div className="container">
        <div className="container-bg"></div>
        <div className="main-container">
          <header className="header">
            <h1 className="title">Resumen de Actividad</h1>
            <p className="description">
              Aquí encontrarás un panorama general de tus programas, efectos y
              la actividad más reciente dentro del sistema.
            </p>
          </header>
          <section className="section-stats">
            <div className="stat-card">
              <div className="stat-icon stat-icon-blue">
                <ListMusic size={40} />
              </div>
              <div className="stat-label">Programas Asignados</div>
              <div className="stat-value">3</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon-purple">
                <Waves size={40} />
              </div>
              <div className="stat-label">FX Personales</div>
              <div className="stat-value">12</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon-pink">
                <Radio size={40} />
              </div>
              <div className="stat-label">FX Institucionales</div>
              <div className="stat-value">156</div>
            </div>
          </section>
          <section className="section-activity">
            <div className="activity-title">
              <Waves className="activity-icon" size={20} />
              Mi Actividad Reciente
            </div>
            <ul className="activity-list">
              <li className="activity-pill">
                • Reprodujiste FX 'Intro Personal' en Programa Matutino
              </li>
              <li className="activity-pill">
                • Agregaste nuevo FX 'Mi Transición Especial'
              </li>
              <li className="activity-pill">
                • Editaste FX 'Efecto Personal 2' - duración actualizada
              </li>
              <li className="activity-pill">
                • Reprodujiste FX 'Separador Comercial' institucional
              </li>
              <li className="activity-pill">
                • Creaste nuevo FX 'Sonido Único' para uso personal
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DashboardOperador;
