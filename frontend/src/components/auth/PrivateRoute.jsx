// src/components/auth/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/" replace />;

  const role = user.role || user.tipo || user.type;

  if (!allowedRoles.includes(role)) {
    switch (role) {
      case "admin": return <Navigate to="/admin/dashboard" replace />;
      case "operador": return <Navigate to="/operador/dashboard" replace />;
      case "productor": return <Navigate to="/productor/biblioteca-fx" replace />;
      default: return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default PrivateRoute;
