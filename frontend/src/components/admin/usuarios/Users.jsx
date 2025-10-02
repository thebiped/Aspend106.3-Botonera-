import React, { useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import { Plus } from "lucide-react";
import AddUserModal from "./modal/Add/AddUserModal";
import EditUserModal from "./modal/Edit/EditUserModal";
import "./Users.css";

const usersData = [
  {
    name: "Juan Pérez",
    role: "Operador",
    programs: "Programa Matutino, Tarde Musical",
  },
  {
    name: "Jose Alberto Plasma",
    role: "Jefe de Operadores",
    programs: "Todos los programas",
  },
  { name: "Carlos López", role: "Productor", programs: "Programa Matutino" },
  { name: "Ana Martín", role: "Operador", programs: "Noticias Centrales" },
];

function Users() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = usersData.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.programs.toLowerCase().includes(search.toLowerCase());
    const matchesRole = !role || u.role === role;
    return matchesSearch && matchesRole;
  });

  const programas = [
    { name: "Programa Matutino" },
    { name: "Tarde Musical" },
    { name: "Noticias Centrales" },
    { name: "Todos los programas" },
  ];

  const handleSaveUser = (userData) => {
    console.log("Nuevo usuario:", userData);
    setModalOpen(false);
  };

  const handleUpdateUser = (userData) => {
    console.log("Usuario editado:", userData);
    setEditModalOpen(false);
  };

  return (
    <div className="dashboard-root">
      <Sidebar active="usuarios" />
      <div className="container">
        <div className="container-bg" />
        <div className="programs-header">
          <div className="programs-header-info">
            <h1 className="programs-title">Panel de Usuario</h1>
            <p className="programs-desc">
              Accede a tus datos básicos, configuraciones personales y acciones
              rápidas relacionadas con tu cuenta de operador.
            </p>
          </div>
          <button
            className="sparkle-button"
            onClick={() => setModalOpen(true)}
          >
            <Plus size={18} /> Nuevo Usuario
            <span className="spark"></span>
            <span className="backdrop"></span>
          </button>

        </div>
        <main className="main-container">
          <section className="users-section">
            <div className="users-section-header">
              <span className="users-section-title">Lista de Usuarios</span>
              <div className="users-filters">
                <div className="fxu-input-search-wrapper">
                  <input type="text" placeholder="Buscar usuario o programa..." value={search} onChange={(e) => setSearch(e.target.value)}/>
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
                  <tr key={idx}>
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
          </section>
        </main>
        <AddUserModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveUser}
          programas={programas}
        />
        <EditUserModal
          open={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          onSave={handleUpdateUser}
          user={selectedUser}
          programas={programas}
        />
      </div>
    </div>
  );
}

export default Users;
