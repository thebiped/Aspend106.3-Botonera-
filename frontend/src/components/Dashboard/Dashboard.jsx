import { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import AnimatedCounter from "../animatedCount/AnimatedCounter";
import {
  Home,
  Radio,
  Users,
  Volume2,
  AudioLines,
  Activity,
  ListMusic,
  Waves,
} from "lucide-react";
import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const role = user.role || "admin";
  const userName = user.name || "Usuario";

  const [loadingStats, setLoadingStats] = useState([true, true, true]);
  const [loadingActivity, setLoadingActivity] = useState([]);
  const [activityList, setActivityList] = useState([]);

  const dashboardConfig = {
    admin: {
      userType: "admin",
      title: "Resumen de Actividad",
      description: "Aquí encontrarás un panorama general...",
      stats: [
        {
          label: "Total de Programas",
          value: 24,
          icon: <Radio size={30} />,
          color: "blue",
        },
        {
          label: "Total de Usuarios",
          value: 18,
          icon: <Users size={30} />,
          color: "purple",
        },
        {
          label: "Efectos Institucionales",
          value: 156,
          icon: <Volume2 size={30} />,
          color: "pink",
        },
      ],
      activityIcon: <Activity size={30} />,
      activityTitle: "Actividad Reciente",
      activityData: [
        "Se agregó un FX a Programa Matutino",
        "Usuario Juan Pérez creado como Operador",
        "FX 'Intro News' actualizado",
      ],
    },
    operador: {
      userType: "jefe-operador",
      title: "Resumen de Actividad",
      description: "Aquí encontrarás un panorama general de tus programas...",
      stats: [
        {
          label: "Programas Asignados",
          value: 3,
          icon: <ListMusic size={40} />,
          color: "blue",
        },
        {
          label: "FX Personales",
          value: 12,
          icon: <Waves size={40} />,
          color: "purple",
        },
        {
          label: "FX Institucionales",
          value: 156,
          icon: <Radio size={40} />,
          color: "pink",
        },
      ],
      activityIcon: <Waves size={24} />,
      activityTitle: "Mi Actividad Reciente",
      activityData: [
        "Reprodujiste FX 'Intro Personal'",
        "Agregaste nuevo FX 'Mi Transición Especial'",
      ],
    },
    productor: {
      userType: "productor",
      title: "Actividad del Productor",
      description: "Desde aquí podés ver tus programas...",
      stats: [
        {
          label: "Programas Produciendo",
          value: 2,
          icon: <Home size={35} />,
          color: "blue",
        },
        {
          label: "Colaboradores",
          value: 5,
          icon: <Users size={35} />,
          color: "purple",
        },
        {
          label: "Efectos del Programa",
          value: 47,
          icon: <AudioLines size={35} />,
          color: "pink",
        },
      ],
      activityIcon: <AudioLines size={24} />,
      activityTitle: "Mis Actividades Recientes",
      activityData: [
        "Se agregó FX 'Intro del Show' al programa principal",
        "Editaste el guion del episodio 3",
      ],
    },
  };

  const config = dashboardConfig[role];

  // Animación de carga
  useEffect(() => {
    const timers = [
      setTimeout(
        () => setLoadingStats((prev) => [false, prev[1], prev[2]]),
        500
      ),
      setTimeout(
        () => setLoadingStats((prev) => [prev[0], false, prev[2]]),
        800
      ),
      setTimeout(
        () => setLoadingStats((prev) => [prev[0], prev[1], false]),
        1100
      ),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const dataFromBackend = config.activityData;
    setActivityList(dataFromBackend);
    setLoadingActivity(new Array(dataFromBackend.length).fill(true));

    dataFromBackend.forEach((_, idx) => {
      setTimeout(() => {
        setLoadingActivity((prev) => {
          const copy = [...prev];
          copy[idx] = false;
          return copy;
        });
      }, 1200 + idx * 200);
    });
  }, [role]);

  return (
    <div className="container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">{config.title}</h1>
        <p className="dashboard-desc">{config.description}</p>
      </header>

      <section className="dashboard-section-stats">
        {config.stats.map((s, idx) => (
          <div
            key={idx}
            className={`dashboard-stat-card dashboard-stat-${s.color}`}
          >
            <div className={`dashboard-stat-icon dashboard-icon-${s.color}`}>
              {s.icon}
            </div>
            <div className="dashboard-stat-label">{s.label}</div>
            <div className="dashboard-stat-value">
              {loadingStats[idx] ? (
                <div className="stat-spinner" />
              ) : (
                <AnimatedCounter value={s.value} />
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="dashboard-section-activity">
        <div className="dashboard-activity-title">
          {config.activityIcon} {config.activityTitle}
        </div>
        <ul className="dashboard-activity-list">
          {activityList.map((item, idx) => (
            <li key={idx} className="dashboard-activity-pill">
              {loadingActivity[idx] ? <div className="stat-spinner" /> : item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
