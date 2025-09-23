import React, { useState } from "react";
import {
  Home,
  Radio,
  Users,
  Volume2,
  Plus,
  Search,
  Play,
  AudioLines,
  Settings,
} from "lucide-react";
import "../../../assets/css/Admins/Programas.css";
import { Link } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";
import FxInstitucionales from "./fx/FxInstitucionales";
import FxProgramas from "./fx/FxProgramas";
import Filter from "./Filter/Filter";

function Programas() {
  const [tab, setTab] = useState("institucionales");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="dashboard-root">
      <Sidebar active="programas" />
      <div className="container">
        <div className="container-bg" />
        {/* Header */}
        <div className="programs-header">
          <div className="programs-header-info">
            <h1 className="programs-title">Gestión de Programas</h1>
            <p className="programs-desc">
              Consulta y administra los programas que tienes asignados. Desde
              aquí puedes ver su estado y organizar los recursos asociados.
            </p>
          </div>
          <button className="programs-add-btn">
            <Plus size={18} /> Agregar FX
          </button>
        </div>
        {/* Filtros */}
        <main className="main-container">
          <Filter
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            tab={tab}
            setTab={setTab}
          />
          {tab === "institucionales" ? (
            <FxInstitucionales
              search={search}
              category={category}
              setCategory={setCategory}
            />
          ) : (
            <FxProgramas
              search={search}
              category={category}
              setCategory={setCategory}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default Programas;
