import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Radio,
  Users,
  Volume2,
  Settings,
  AudioLines,
  Activity,
} from "lucide-react";
import "../../../assets/css/Admins/Dashboard.css";
import Sidebar from "../../sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="dashboard-root">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Container */}
      <div className="container">
        <div className="container-bg" />
        <header className="header">
          <h1 className="title">Resumen de Actividad</h1>
          <p className="description">
            Aquí encontrarás un panorama general de tus programas, efectos y la
            actividad más reciente dentro del sistema.
          </p>
        </header>
        <main className="main-container">
          <section className="section-stats">
            <div className="stat-card">
              <div className="stat-icon stat-icon-blue">
                <Radio size={30} />
              </div>
              <div className="stat-label">Total de Programas</div>
              <div className="stat-value">24</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon-purple">
                <Users size={30} />
              </div>
              <div className="stat-label">Total de Usuarios</div>
              <div className="stat-value">18</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon stat-icon-pink">
                <Volume2 size={30} />
              </div>
              <div className="stat-label">Efectos Institucionales</div>
              <div className="stat-value">156</div>
            </div>
          </section>
          <section className="section-activity">
            <div className="activity-title">
              <Activity size={30} className="activity-icon" />
              Actividad Reciente
            </div>
            <ul className="activity-list">
              <li className="activity-pill">
                Se agregó un FX a Programa Matutino
              </li>
              <li className="activity-pill">
                Usuario Juan Pérez creado como Operador
              </li>
              <li className="activity-pill">FX 'Intro News' actualizado</li>
              <li className="activity-pill">
                Programa 'Tarde Musical' editado
              </li>
              <li className="activity-pill">
                Nuevo efecto personal agregado por María
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
