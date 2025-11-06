import React, { useState, useEffect } from "react";
<<<<<<< HEAD
=======
import { Plus, Radio, Search } from "lucide-react";
>>>>>>> 924de830270eeb7464e66c0aaa5729f553318cba
import AddEffectModal from "./modal/Add/AddEffectModal";
import EditEffectModal from "./modal/Edit/EditEffectModal";
import "./Effects.css";

const programsData = [
  {
    name: "Juan Pérez",
    type: "Operador",
    fx: 12,
    operators: "Juan Pérez",
    producers: "Carlos López",
  },
  {
    name: "Jose Alberto Plasma",
    type: "Jefe de Operadores",
    fx: 8,
    operators: "Ana Martín",
    producers: "Luis Rodríguez",
  },
  {
    name: "Carlos López",
    type: "Productor",
    fx: 15,
    operators: "Laura Torres",
    producers: "Miguel Ángel",
  },
  {
    name: "Ana Martín",
    type: "Operador",
    fx: 6,
    operators: "Roberto Silva",
    producers: "Carmen Ruiz",
  },
];

function Effects() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [effectToEdit, setEffectToEdit] = useState(null);
  const [loading, setLoading] = useState(true);

  const programs = programsData.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.operators.toLowerCase().includes(search.toLowerCase()) ||
      p.producers.toLowerCase().includes(search.toLowerCase());
    const matchesType = !type || p.type === type;
    return matchesSearch && matchesType;
  });
<<<<<<< HEAD
  
    const handleSaveFx = (fxData) => {
      setModalOpen(false);
    };

=======

  const handleSaveFx = (fxData) => {
    setModalOpen(false);
  };
>>>>>>> 924de830270eeb7464e66c0aaa5729f553318cba
  const handleEdit = (effect) => {
    setEffectToEdit(effect);
    setEditModalOpen(true);
  };
  const handleSaveEdit = (editedEffect) => {
    setEditModalOpen(false);
    setEffectToEdit(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className="programs-header">
        <div className="programs-header-info">
          <h1 className="programs-title">Biblioteca de Efectos</h1>
          <p className="programs-desc">
            Revisa, crea y edita efectos personales o institucionales para
            utilizarlos en tus programas.
          </p>
        </div>
<<<<<<< HEAD
        <main className="main-container">
          <section className="effects-section">
            {loading ? (
              <div className="loading-skeleton">
                <div className="skeleton-header shimmer-bar"></div>
                <div className="skeleton-row shimmer-bar"></div>
                <div className="skeleton-row shimmer-bar"></div>
                <div className="skeleton-row shimmer-bar"></div>
                <div className="skeleton-row shimmer-bar"></div>
              </div>
            ) : (
              <>
                <div className="effects-section-header">
                  <span className="effects-section-title">
                    <Radio size={20} style={{ marginRight: 8 }} /> Lista de Programas
                  </span>
                  <div className="effects-filters">
                    <div className="fxe-input-search-wrapper">
                      <Search size={18} />
                      <input
                        type="text"
                        placeholder="Buscar programa, operador o productor..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <div className="fxe-input-select-wrapper">
                      <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="">Todos los tipos</option>
                        <option value="Operador">Operador</option>
                        <option value="Jefe de Operadores">Jefe de Operadores</option>
                        <option value="Productor">Productor</option>
                      </select>
                    </div>
                  </div>
                </div>
                <table className="effects-table">
                  <thead>
                    <tr>
                      <th>Nombre del Programa</th>
                      <th>Tipo</th>
                      <th>Cantidad de FX</th>
                      <th>Operadores</th>
                      <th>Productores</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {programs.map((p, idx) => (
                      <tr key={idx}>
                        <td>{p.name}</td>
                        <td>
                          <span
                            className={`effects-type effects-type-${p.type
                              .replace(/\s/g, "")
                              .toLowerCase()}`}
                          >
                            {p.type}
                          </span>
                        </td>
                        <td>{p.fx}</td>
                        <td>{p.operators}</td>
                        <td>{p.producers}</td>
                        <td>
                          <button
                            className="effects-edit-btn"
                            onClick={() => handleEdit(p)}
                          >
                            Editar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </section>
        </main>
        <AddEffectModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveFx}
          programs={programsData}
        />
        <EditEffectModal
          open={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          onSave={handleSaveEdit}
          effect={effectToEdit}
          programs={programsData}
        />
      </div>
=======
        <button className="sparkle-button" onClick={() => setModalOpen(true)}>
          <Plus size={18} /> Agregar FX
        </button>
      </div>

      <section className="effects-section">
        {loading ? (
          <div className="loading-skeleton">
            <div className="skeleton-header shimmer-bar"></div>
            <div className="skeleton-row shimmer-bar"></div>
            <div className="skeleton-row shimmer-bar"></div>
          </div>
        ) : (
          <>
            <div className="effects-section-header">
              <span className="effects-section-title">
                <Radio size={20} style={{ marginRight: 8 }} /> Lista de
                Programas
              </span>
              <div className="effects-filters">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Buscar programa, operador o productor..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="">Todos los tipos</option>
                  <option value="Operador">Operador</option>
                  <option value="Jefe de Operadores">Jefe de Operadores</option>
                  <option value="Productor">Productor</option>
                </select>
              </div>
            </div>

            <div className="table-wrapper">
              <table className="effects-table">
                <thead>
                  <tr>
                    <th>Nombre del Programa</th>
                    <th>Tipo</th>
                    <th>Cantidad de FX</th>
                    <th>Operadores</th>
                    <th>Productores</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((p, idx) => (
                    <tr key={idx}>
                      <td>{p.name}</td>
                      <td>
                        <span
                          className={`effects-type effects-type-${p.type
                            .replace(/\s/g, "")
                            .toLowerCase()}`}
                        >
                          {p.type}
                        </span>
                      </td>
                      <td>{p.fx}</td>
                      <td>{p.operators}</td>
                      <td>{p.producers}</td>
                      <td>
                        <button
                          className="effects-edit-btn"
                          onClick={() => handleEdit(p)}
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>

      <AddEffectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveFx}
        programs={programsData}
      />
      <EditEffectModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSaveEdit}
        effect={effectToEdit}
        programs={programsData}
      />
>>>>>>> 924de830270eeb7464e66c0aaa5729f553318cba
    </div>
  );
}

export default Effects;
