import React, { useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import { Plus } from "lucide-react";
import FxInstitucionales from "./fx/institucional/FxInstitucionales";
import FxProgramas from "./fx/programa/FxProgramas";
import AddFxModal from "./modal/AddFxModal";
import "./Programas.css";

function Programas() {
  const [tab, setTab] = useState("institucionales");
  const [showModal, setShowModal] = useState(false);

  const rol =
    typeof window !== "undefined" && window.rol
      ? window.rol
      : typeof window !== "undefined" && window.userType
      ? window.userType
      : "admin";

  const handleAddFx = (fx) => {
    setShowModal(false);
    // lógica para guardar FX
  };

  return (
    <div className="dashboard-root">
      <Sidebar active="programas" userType={rol} />

      {/* CAMBIO: className ahora es programs-container */}
      <div className="container">
        <div className="container-bg" />

        <div className="programs-header">
          <div className="programs-header-info">
            <h1 className="programs-title">Gestión de Programas</h1>
            <p className="programs-desc">
              Consulta y administra los programas que tienes asignados. Desde
              aquí puedes ver su estado y organizar los recursos asociados.
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="programs-tabs">
          <div
            className={`programs-tab ${
              tab === "institucionales" ? "programs-tab-active" : ""
            }`}
            onClick={() => setTab("institucionales")}
          >
            Institucionales
          </div>
          <div
            className={`programs-tab ${
              tab === "programas" ? "programs-tab-active" : ""
            }`}
            onClick={() => setTab("programas")}
          >
            Programas
          </div>
        </div>

        {/* CONTENIDO */}
        <main className="main-container">
          <div className="programs-lists">
            {tab === "institucionales" ? (
              <FxInstitucionales rol={rol} />
            ) : (
              <FxProgramas rol={rol} />
            )}
          </div>
        </main>

        <AddFxModal
          open={showModal}
          onClose={() => setShowModal(false)}
          onSave={handleAddFx}
        />
      </div>
    </div>
  );
}

export default Programas;
