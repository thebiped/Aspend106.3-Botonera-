import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import Sidebar from "../../sidebar/Sidebar";
import { Plus } from "lucide-react";
import AddUserModal from "./modal/Add/AddUserModal";
import EditUserModal from "./modal/Edit/EditUserModal";
=======
import { Plus, Radio, Search } from "lucide-react";
import AddEffectModal from "./modal/Add/AddUserModal";
import EditEffectModal from "./modal/Edit/EditUserModal";
>>>>>>> 924de830270eeb7464e66c0aaa5729f553318cba
import "./Users.css";

const programsData = [
  { name: "Juan Pérez", type: "Operador", fx: 12, operators: "Juan Pérez", producers: "Carlos López" },
  { name: "Jose Alberto Plasma", type: "Jefe de Operadores", fx: 8, operators: "Ana Martín", producers: "Luis Rodríguez" },
  { name: "Carlos López", type: "Productor", fx: 15, operators: "Laura Torres", producers: "Miguel Ángel" },
  { name: "Ana Martín", type: "Operador", fx: 6, operators: "Roberto Silva", producers: "Carmen Ruiz" },
];

function Effects() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
<<<<<<< HEAD
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true); 
=======
  const [effectToEdit, setEffectToEdit] = useState(null);
  const [loading, setLoading] = useState(true);
>>>>>>> 924de830270eeb7464e66c0aaa5729f553318cba

  const programs = programsData.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.operators.toLowerCase().includes(search.toLowerCase()) || p.producers.toLowerCase().includes(search.toLowerCase());
    const matchesType = !type || p.type === type;
    return matchesSearch && matchesType;
  });

  const handleSaveFx = (fxData) => { setModalOpen(false); };
  const handleEdit = (effect) => { setEffectToEdit(effect); setEditModalOpen(true); };
  const handleSaveEdit = (editedEffect) => { setEditModalOpen(false); setEffectToEdit(null); };

  useEffect(() => { const timer = setTimeout(() => setLoading(false), 1500); return () => clearTimeout(timer); }, []);

  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s de animación
    return () => clearTimeout(timer);
  }, []);

  return (
      <div className="container">
        <div className="programs-header">
          <div className="programs-header-info">
            <h1 className="programs-title">Biblioteca de Efectos</h1>
            <p className="programs-desc">Revisa, crea y edita efectos personales o institucionales para utilizarlos en tus programas.</p>
          </div>
          <button className="sparkle-button" onClick={() => setModalOpen(true)}>
            <Plus size={18} /> Agregar FX
          </button>
        </div>
<<<<<<< HEAD
        <main className="main-container">
          <section className="users-section">
=======

          <section className="effects-section">
>>>>>>> 924de830270eeb7464e66c0aaa5729f553318cba
            {loading ? (
              <div className="loading-skeleton">
                <div className="skeleton-header shimmer-bar"></div>
                <div className="skeleton-row shimmer-bar"></div>
                <div className="skeleton-row shimmer-bar"></div>
<<<<<<< HEAD
                <div className="skeleton-row shimmer-bar"></div>
                <div className="skeleton-row shimmer-bar"></div>
              </div>
            ) : (
              <>
                <div className="users-section-header">
                  <span className="users-section-title">Lista de Usuarios</span>
                  <div className="users-filters">
                    <div className="fxu-input-search-wrapper">
                      <input
                        type="text"
                        placeholder="Buscar usuario o programa..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                    <div className="fxu-input-select-wrappper">
                      <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="">Todos los roles</option>
                        <option value="Operador">Operador</option>
                        <option value="Jefe de Operadores">Jefe de Operadores</option>
                        <option value="Productor">Productor</option>
                      </select>
                    </div>
                  </div>
                </div>
                <table className="users-table">
                  <thead>
                    <tr>
                      <th>Nombre de Usuario</th>
                      <th>Rol</th>
                      <th>Programas Asignados</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, idx) => (
                      <tr
                        key={idx}
                        style={{
                          animationDelay: `${idx * 0.15}s`,
                        }}
                      >
                        <td>{user.name}</td>
                        <td>
                          <span
                            className={`users-role users-role-${user.role
                              .replace(/\s/g, "")
                              .toLowerCase()}`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td>{user.programs}</td>
                        <td>
                          <button
                            className="users-edit-btn"
                            onClick={() => {
                              setSelectedUser(user);
                              setEditModalOpen(true);
                            }}
                          >
                            Editar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
=======
              </div>
            ) : (
              <>
                <div className="effects-section-header">
                  <span className="effects-section-title">
                    <Radio size={20} style={{ marginRight: 8 }} /> Lista de Programas
                  </span>
                  <div className="effects-filters">
                    <Search size={18} />
                    <input type="text" placeholder="Buscar programa, operador o productor..." value={search} onChange={(e) => setSearch(e.target.value)} />
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
                            <span className={`effects-type effects-type-${p.type.replace(/\s/g, "").toLowerCase()}`}>
                              {p.type}
                            </span>
                          </td>
                          <td>{p.fx}</td>
                          <td>{p.operators}</td>
                          <td>{p.producers}</td>
                          <td>
                            <button className="effects-edit-btn" onClick={() => handleEdit(p)}>Editar</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
>>>>>>> 924de830270eeb7464e66c0aaa5729f553318cba
              </>
            )}
          </section>

        <AddEffectModal open={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSaveFx} programs={programsData} />
        <EditEffectModal open={editModalOpen} onClose={() => setEditModalOpen(false)} onSave={handleSaveEdit} effect={effectToEdit} programs={programsData} />
      </div>
  );
}

export default Effects;
