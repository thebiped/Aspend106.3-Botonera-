import Sidebar from "../../sidebar/Sidebar";
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
import { useState, useEffect } from "react";
import "./Dashboard.css";
import AnimatedCounter from "../../animatedCount/AnimatedCounter";

function Dashboard() {
  const [loadingStats, setLoadingStats] = useState([true, true, true]);
  const [loadingActivity, setLoadingActivity] = useState([]);
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setLoadingStats(prev => [false, prev[1], prev[2]]), 500),
      setTimeout(() => setLoadingStats(prev => [prev[0], false, prev[2]]), 800),
      setTimeout(() => setLoadingStats(prev => [prev[0], prev[1], false]), 1100),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  useEffect(() => {
    const fetchActivity = async () => {
      const dataFromBackend = [
        "Se agregó un FX a Programa Matutino",
        "Usuario Juan Pérez creado como Operador",
        "FX 'Intro News' actualizado",
        "Programa 'Tarde Musical' editado",
        "Nuevo efecto personal agregado por María",
      ];

      setActivityList(dataFromBackend);
      setLoadingActivity(new Array(dataFromBackend.length).fill(true));

      dataFromBackend.forEach((_, idx) => {
        setTimeout(() => {
          setLoadingActivity(prev => {
            const copy = [...prev];
            copy[idx] = false;
            return copy;
          });
        }, 1200 + idx * 200);
      });
    };

    fetchActivity();
  }, []);

  return (
    <div className="dashboard-root">
      <Sidebar active={0} userType="admin" userName="Admin Aspen" />

      <div className="container">
        <div className="container-bg" />
        <header className="admin-header">
          <h1 className="admin-title">Resumen de Actividad</h1>
          <p className="admin-description">
            Aquí encontrarás un panorama general de tus programas, efectos y la
            actividad más reciente dentro del sistema.
          </p>
        </header>
        <main className="main-container">
          <section className="admin-section-stats">
            <div className="admin-stat-card">
              <div className="admin-stat-icon admin-stat-icon-blue">
                <Radio size={30} />
              </div>
              <div className="admin-stat-label">Total de Programas</div>
              <div className="admin-stat-value">
                {loadingStats[0] ? <div className="stat-spinner" /> : <AnimatedCounter value={24} />}
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-icon admin-stat-icon-purple">
                <Users size={30} />
              </div>
              <div className="admin-stat-label">Total de Usuarios</div>
              <div className="admin-stat-value">
                {loadingStats[1] ? <div className="stat-spinner" /> : <AnimatedCounter value={18} />}
              </div>
            </div>

            <div className="admin-stat-card">
              <div className="admin-stat-icon admin-stat-icon-pink">
                <Volume2 size={30} />
              </div>
              <div className="admin-stat-label">Efectos Institucionales</div>
              <div className="admin-stat-value">
                {loadingStats[2] ? <div className="stat-spinner" /> : <AnimatedCounter value={156} />}
              </div>
            </div>
          </section>

          <section className="admin-section-activity">
            <div className="admin-activity-title">
              <Activity size={30} className="admin-activity-icon" />
              Actividad Reciente
            </div>
            <ul className="admin-activity-list">
              {activityList.map((item, idx) => (
                <li className="admin-activity-pill" key={idx}>
                  {loadingActivity[idx] ? <div className="stat-spinner" /> : item}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
