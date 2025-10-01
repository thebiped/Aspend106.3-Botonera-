import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Programas from "./components/admin/programas/Programas";
import Register from "./components/Register/Register";
import Users from "./components/admin/usuarios/Users";
import Effects from "./components/admin/effects/Effects";
import Perfil from "./components/admin/perfil/Perfil";
import DashboardOperador from "./components/operador/dashboard/Dashboard";
import ProgramasOperador from "./components/operador/programas/MisProgramas";
import ProgramaDetalle from "./components/operador/programas/detalle/ProgramaDetalle";
import MisEfectosOperador from "./components/operador/efectos/MisEfectos";
import FxInstitucionales from "./components/operador/institucionales/FxInstitucionales";
import ProgramasProductor from "./components/productor/programas/ProgramasProductor";
import PerfilProductor from "./components/productor/perfil/PerfilProductor";
import EfectosProductor from "./components/productor/efectos/EfectosProductor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/programas" element={<Programas />} />
        <Route path="admin/usuarios" element={<Users />} />
        <Route path="admin/efectos" element={<Effects />} />
        <Route path="admin/perfil" element={<Perfil />} />

        <Route path="/operador/dashboard" element={<DashboardOperador />} />
        <Route path="/operador/programas" element={<ProgramasOperador />} />
        <Route path="/programa/:id" element={<ProgramaDetalle />} />
        <Route path="/operador/efectos" element={<MisEfectosOperador />} />
        <Route
          path="/operador/institucionales"
          element={<FxInstitucionales />}
        />
        <Route path="/operador/perfil" element={<Perfil />} />
        <Route path="/productor/programas" element={<ProgramasProductor />} />
        <Route path="/productor/efectos" element={<EfectosProductor />} />
        <Route path="/productor/perfil" element={<PerfilProductor />} />

        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
