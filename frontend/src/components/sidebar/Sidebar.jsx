import { AudioLines, Home, Radio, Settings, Users, Volume2 } from 'lucide-react';
import React from 'react'
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
        <aside className="sidebar">
            <div className="sidebar-logo">
            <span className="sidebar-logo-icon">
                <AudioLines color="#B536FF"/>
            </span>
            <span className="sidebar-logo-text">Aspen 102.6</span>
            </div>
            <nav className="sidebar-nav">
            <ul>
                <li className="nav-item nav-item-active">
                <span className="nav-icon">
                    <Home size={22} />
                </span>
                <span className="nav-label">Inicio</span>
                </li>
                <li className="nav-item">
                <span className="nav-icon">
                    <Radio size={22} />
                </span>
                <Link to="/programas" className="nav-label">Programas</Link>
                </li>
                <li className="nav-item">
                <span className="nav-icon">
                    <Users size={22} />
                </span>
                <span className="nav-label">Usuarios</span>
                </li>
                <li className="nav-item">
                <span className="nav-icon">
                    <Volume2 size={22} />
                </span>
                <span className="nav-label">Efectos</span>
                </li>
            </ul>
            </nav>
            <div className="sidebar-user">
            <div className="user-avatar">JAP</div>
            <div className="user-info">
                <div className="user-name">Jose Alberto P</div>
                <div className="user-role">Jefe de operadores</div>
            </div>
            <button className="user-settings" aria-label="Ajustes">
                <Settings size={20} />
            </button>
            </div>
        </aside>
    </>
  )
}

export default Sidebar