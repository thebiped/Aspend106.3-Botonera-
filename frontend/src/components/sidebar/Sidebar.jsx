import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaUsers, 
  FaHome, 
  FaMusic, 
  FaBook, 
  FaFolderOpen, 
  FaCog, 
  FaWaveSquare 
} from "react-icons/fa"; 
import './Sidebar.css'

const Sidebar = ({ userType = "operador", userName = "Pepe Pascal" }) => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // NavItems por rol
  const navItems = {
    admin: [
      { label: "Inicio", icon: <FaHome size={20} /> },
      { label: "Usuarios", icon: <FaUsers size={20} /> },
      { label: "Gestion FX", icon: <FaMusic size={20} /> },
      { label: "Mis Efectos", icon: <FaFolderOpen size={20} /> },
      { label: "Biblioteca FX", icon: <FaBook size={20} /> },
    ],
    operador: [
      { label: "Inicio", icon: <FaHome size={20} /> },
      { label: "Mis Efectos", icon: <FaFolderOpen size={20} /> },
      { label: "Biblioteca FX", icon: <FaBook size={20} /> },
    ],
    productor: [
      { label: "Biblioteca FX", icon: <FaBook size={20} /> },
    ],
  }[userType] || [];

  const roleLabel = {
    admin: "Administrador",
    operador: "Operador",
    productor: "Productor",
  }[userType || "operador"];

  // Rutas por label y rol
  const getRoute = (label) => {
    const routes = {
      admin: {
        Inicio: "/admin/dashboard",
        Usuarios: "/admin/usuarios",
        "Gestion FX": "/admin/efectos",
        "Mis Efectos": "/admin/mis-efectos",
        "Biblioteca FX": "/admin/biblioteca-fx",
      },
      operador: {
        Inicio: "/operador/dashboard",
        "Mis Efectos": "/operador/mis-efectos",
        "Biblioteca FX": "/operador/biblioteca-fx",
      },
      productor: {
        "Biblioteca FX": "/productor/biblioteca-fx",
      },
    };
    return routes[userType]?.[label] || "/";
  };

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <aside className="sidebar" role="navigation">
      <div className="sidebar-logo">
        <FaWaveSquare size={28} color="#b536ff" />
        <span className="sidebar-logo-text">Aspen 102.6</span>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li
              key={item.label}
              className="nav-item"
              onClick={() => navigate(getRoute(item.label), { replace: true })}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-user">
        <div className="sidebar-user-content">
          <div className="user-avatar">
            {String(userName)
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <div className="user-info">
            <div className="user-name">{userName}</div>
            <div className="user-role">{roleLabel}</div>
          </div>

          <div className="user-settings-menu-wrapper" ref={menuRef}>
            <button
              className="user-settings"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <FaCog size={20} />
            </button>
            {menuOpen && (
              <div className="user-dropdown-menu">
                <button
                  className="user-dropdown-item"
                  onClick={() => navigate("/perfil", { replace: true })}
                >
                  Ver perfil
                </button>
                <button
                  className="user-dropdown-item"
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/", { replace: true });
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
};

export default Sidebar;
