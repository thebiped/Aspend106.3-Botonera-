import { Home, ListMusic, Waves, Radio } from "lucide-react";
import "./Dashboard.css";
import Sidebar from "../../sidebar/Sidebar";
import { useState, useEffect } from "react";
import AnimatedCounter from "../../animatedCount/AnimatedCounter";

function DashboardOperador() {
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
      // Aquí tu backend debería mandar los datos
      const dataFromBackend = [
        "Reprodujiste FX 'Intro Personal' en Programa Matutino",
        "Agregaste nuevo FX 'Mi Transición Especial'",
        "Editaste FX 'Efecto Personal 2' - duración actualizada",
        "Reprodujiste FX 'Separador Comercial' institucional",
        "Creaste nuevo FX 'Sonido Único' para uso personal",
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
        }, 1200 + idx * 200); // empieza después de la animación de stats
      });
    };

    fetchActivity();
  }, []);

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
          <header className="operador-dashboard-header">
            <h1 className="operador-dashboard-title">Resumen de Actividad</h1>
            <p className="operador-dashboard-desc">
              Aquí encontrarás un panorama general de tus programas, efectos y
              la actividad más reciente dentro del sistema.
            </p>
          </header>

          <section className="operador-section-stats">
            <div className="operador-stat-card">
              <div className="operador-stat-icon operador-stat-icon-blue">
                <ListMusic size={40} />
              </div>
              <div className="operador-stat-label">Programas Asignados</div>
              <div className="operador-stat-value">
                {loadingStats[0] ? <div className="stat-spinner" /> : <AnimatedCounter value={3} />}
              </div>
            </div>

            <div className="operador-stat-card">
              <div className="operador-stat-icon operador-stat-icon-purple">
                <Waves size={40} />
              </div>
              <div className="operador-stat-label">FX Personales</div>
              <div className="operador-stat-value">
                {loadingStats[1] ? <div className="stat-spinner" /> : <AnimatedCounter value={12} />}
              </div>
            </div>

            <div className="operador-stat-card">
              <div className="operador-stat-icon operador-stat-icon-pink">
                <Radio size={40} />
              </div>
              <div className="operador-stat-label">FX Institucionales</div>
              <div className="operador-stat-value">
                {loadingStats[2] ? <div className="stat-spinner" /> : <AnimatedCounter value={156} />}
              </div>
            </div>
          </section>

          <section className="operador-section-activity">
            <div className="operador-activity-title">
              <Waves className="operador-activity-icon" size={20} />
              Mi Actividad Reciente
            </div>
            <ul className="operador-activity-list">
              {activityList.map((item, idx) => (
                <li className="operador-activity-pill" key={idx}>
                  {loadingActivity[idx] ? <div className="stat-spinner" /> : item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DashboardOperador;
