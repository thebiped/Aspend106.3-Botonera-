import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";

import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Usuarios from "./components/admin/usuarios/Users";
import GestionFX from "./components/admin/effects/Effects";
import MisEfectos from "./components/MisEfectos/MisEfectos";
import MisEfectosAudio from "./components/MisEfectos/MisEfectosAudio";
import BibliotecaFX from "./components/shared/BibliotecaFX";
import BibliotecaFXAudio from "./components/shared/BibliotecaFXAudio";
import Profile from "./components/Profile/Perfil";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import "./index.css";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const userRole = user?.role || user?.tipo || "";
  const location = useLocation();

  // Ocultar sidebar en login y register
  const hideSidebarPaths = ["/", "/register"];
  const shouldHideSidebar = hideSidebarPaths.includes(location.pathname);
  const showSidebar = !!user && !shouldHideSidebar;

  const dashboardRoutes = {
    admin: "/admin/dashboard",
    operador: "/operador/dashboard",
    "jefe-operador": "/operador/dashboard",
    productor: "/productor/biblioteca-fx",
  };

  return (
    <>
      {showSidebar && (
        <Sidebar
          userType={userRole}
          userName={user?.name || user?.n_usuario || "Usuario"}
        />
      )}

      <main
        className={`app-main ${showSidebar ? "with-sidebar" : "no-sidebar"}`}
      >
        <Routes>
          {/* 🔐 Login / Register */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Redirección automática según rol */}
          <Route
            path="/home"
            element={
              user ? (
                <Navigate to={dashboardRoutes[userRole] || "/login"} replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* === ADMIN === */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Dashboard role="admin" />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/usuarios"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Usuarios />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/efectos"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <GestionFX />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/biblioteca-fx"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <BibliotecaFX />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/mis-efectos"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <MisEfectos />
              </PrivateRoute>
            }
          />

          {/* === OPERADOR === */}
          <Route
            path="/operador/dashboard"
            element={
              <PrivateRoute allowedRoles={["operador", "jefe-operador"]}>
                <Dashboard role="operador" />
              </PrivateRoute>
            }
          />
          <Route
            path="/operador/mis-efectos"
            element={
              <PrivateRoute allowedRoles={["operador", "jefe-operador"]}>
                <MisEfectos />
              </PrivateRoute>
            }
          />
          <Route
            path="/operador/biblioteca-fx"
            element={
              <PrivateRoute allowedRoles={["operador", "jefe-operador"]}>
                <BibliotecaFX />
              </PrivateRoute>
            }
          />

          {/* === PRODUCTOR === */}
          <Route
            path="/productor/biblioteca-fx"
            element={
              <PrivateRoute allowedRoles={["productor"]}>
                <BibliotecaFX />
              </PrivateRoute>
            }
          />

          {/* === SHARED === */}
          <Route
            path="/biblioteca-fx-audio"
            element={
              <PrivateRoute
                allowedRoles={["admin", "operador", "productor"]}
              >
                <BibliotecaFXAudio />
              </PrivateRoute>
            }
          />
          <Route
            path="/mis-efectos-audio"
            element={
              <PrivateRoute
                allowedRoles={["admin", "operador", "productor"]}
              >
                <MisEfectosAudio />
              </PrivateRoute>
            }
          />

          {/* PERFIL */}
          <Route
            path="/perfil"
            element={
              <PrivateRoute
                allowedRoles={["admin", "operador", "productor"]}
              >
                <Profile />
              </PrivateRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
