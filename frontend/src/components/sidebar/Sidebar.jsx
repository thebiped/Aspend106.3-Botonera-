import {
  Home,
  Radio,
  Settings,
  Users,
  Volume2,
  ListMusic,
  Waves,
  AudioLines,
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ active, userType = "operador", userName = "Pepe Pascal" }) {
  function getRoute(label) {
    if (userType === "admin") {
      switch (label) {
        case "Inicio":
          return "admin/dashboard";
        case "Programas":
          return "admin/programas";
        case "Usuarios":
          return "admin/usuarios";
        case "Efectos":
          return "admin/efectos";
        case "Perfil":
          return "admin/perfil";
        default:
          return "admin/dashboard";
      }
    } else if (userType === "productor") {
      switch (label) {
        case "Programas":
          return "/productor/programas";
        case "FX Institucionales":
          return "/productor/efectos";
        case "Perfil":
          return "/productor/perfil";
        default:
          return "/productor/programas";
      }
    } else {
      switch (label) {
        case "Inicio":
          return "/operador/dashboard";
        case "Mis programas":
          return "/operador/misprogramas";
        case "Mis FX":
          return "/operador/misfx";
        case "FX Institucionales":
          return "/operador/fxinstitucionales";
        case "Panel de Operadores":
          return "/operador/panel";
        default:
          return "/operador/dashboard";
      }
    }
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  let navItems = [];
  let roleLabel = "Operador";
  if (userType === "admin") {
    roleLabel = "Administrador";
    navItems = [
      { label: "Inicio", icon: <Home size={20} /> },
      { label: "Programas", icon: <Radio size={20} /> },
      { label: "Usuarios", icon: <Users size={20} /> },
      { label: "Efectos", icon: <Volume2 size={20} /> },
      { label: "Configuración", icon: <Settings size={20} /> },
    ];
  } else if (userType === "jefe-operador") {
    roleLabel = "Jefe de Operadores";
    navItems = [
      { label: "Inicio", icon: <Home size={20} /> },
      { label: "Mis programas", icon: <ListMusic size={20} /> },
      { label: "Mis FX", icon: <Waves size={20} /> },
      { label: "FX Institucionales", icon: <Radio size={20} /> },
      { label: "Panel de Operadores", icon: <Radio size={20} /> },
    ];
  } else if (userType === "productor") {
    roleLabel = "Productor";
    navItems = [
      { label: "Programas", icon: <Radio size={20} /> },
      { label: "FX Institucionales", icon: <Volume2 size={20} /> },
      { label: "Perfil", icon: <Settings size={20} /> },
    ];
  } else {
    navItems = [
      { label: "Inicio", icon: <Home size={20} /> },
      { label: "Mis programas", icon: <ListMusic size={20} /> },
      { label: "Mis FX", icon: <Waves size={20} /> },
      { label: "FX Institucionales", icon: <Radio size={20} /> },
    ];
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-icon">
          <AudioLines size={28} color="#b536ff"/>
        </span>
        <span className="sidebar-logo-text">Aspen 102.6</span>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item, idx) => (
            <Link to={getRoute(item.label)} key={item.label}>
              <li
                className={`nav-item${
                  active === idx ? " nav-item-active" : ""
                }`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="sidebar-user">
        <div className="sidebar-user-content">
          <div className="user-avatar">
          {userName
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="user-info">
          <div className="user-name">
            {userType === "admin" ? "Jose Alberto P" : userName}
          </div>
          <div className="user-role">{roleLabel}</div>
        </div>
        <div className="user-settings-menu-wrapper" ref={menuRef}>
          <button
            className="user-settings"
            aria-label="Ajustes"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Settings size={20} />
          </button>
          {menuOpen && (
            <div className="user-dropdown-menu">
              <Link to="/perfil" className="user-dropdown-item">
                Ver perfil
              </Link>
              <button
                className="user-dropdown-item"
                onClick={() => {
                }}
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
