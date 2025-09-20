import React from "react";
import "../assets/css/Dashboard.css";
import { Home, Radio, Volume2, Broadcast } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="brand">Aspen 102.6</h1>
        <nav>
          <ul>
            <li>
              <a href="#">
                <Home size={20} /> Inicio
              </a>
            </li>
            <li>
              <a href="#">
                <Radio size={20} /> Mis programas
              </a>
            </li>
            <li>
              <a href="#">
                <Volume2 size={20} /> Mis FX
              </a>
            </li>
            <li>
              <a href="#">
                <Broadcast size={20} /> FX Institucionales
              </a>
            </li>
          </ul>
        </nav>
        <div className="user">
          <img src="https://via.placeholder.com/40" alt="avatar" />
          <span>Juan Pérez</span>
        </div>
      </aside>

      {/* Main content */}
      <main className="main">
        <h2 className="main-title">Resumen de tu actividad y recursos</h2>

        {/* KPI Cards */}
        <div className="kpi-container">
          <div className="kpi-card">
            <Radio size={32} />
            <p>Programas Asignados</p>
            <h3>3</h3>
          </div>
          <div className="kpi-card">
            <Volume2 size={32} />
            <p>FX Personales</p>
            <h3>12</h3>
          </div>
          <div className="kpi-card">
            <Broadcast size={32} />
            <p>FX Institucionales</p>
            <h3>156</h3>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="activity-panel">
          <h3>Mi Actividad Reciente</h3>
          <ul>
            <li>Reprodujiste FX 'Intro Personal' en Programa Matutino</li>
            <li>Agregaste nuevo FX 'Mi Transición Especial'</li>
            <li>Editaste FX 'Efecto Personal 2' - duración actualizada</li>
            <li>Reprodujiste FX 'Separador Comercial' institucional</li>
            <li>Creaste nuevo FX 'Sonido Único' para uso personal</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
