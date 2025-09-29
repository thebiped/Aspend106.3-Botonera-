import React, { useState, useEffect } from "react";
import "./Modal.css"; 

export default function EditUserModal({
  open,
  onClose,
  onSave,
  user,
  programas = [],
}) {
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [programasAsignados, setProgramasAsignados] = useState([]);

  useEffect(() => {
    if (user) {
      setNombre(user.name || "");
      setRol(user.role || "");
      setProgramasAsignados(user.programs ? user.programs.split(", ") : []);
    }
  }, [user, open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave &&
      onSave({
        ...user,
        name: nombre,
        role: rol,
        programs: programasAsignados.join(", "),
      });
    onClose();
  };

  const handleProgramasChange = (e) => {
    const options = Array.from(e.target.options);
    setProgramasAsignados(
      options.filter((o) => o.selected).map((o) => o.value)
    );
  };

  return (
    <div className="modal-backdrop">
      <div className="modal modal-fx">
        <h2>Editar Usuario</h2>
        <form className="modal-fx-form" onSubmit={handleSubmit}>
          <div className="fx-input-group">
            <label htmlFor="nombre-edit">Nombre de Usuario</label>
            <div className="fx-input-wrapper">
              <input
                id="nombre-edit"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="fx-input-group">
            <label htmlFor="rol-edit">Rol</label>
            <div className="fx-input-wrapper">
              <select
                id="rol-edit"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                required
              >
                <option value="">Selecciona un rol</option>
                <option value="Administrador">Administrador</option>
                <option value="Operador">Operador</option>
                <option value="Productor">Productor</option>
                <option value="Jefe de Operadores">Jefe de Operadores</option>
              </select>
            </div>
          </div>
          <div className="fx-input-group">
            <label htmlFor="programas-edit">Programas Asignados</label>
            <div className="fx-input-wrapper">
              <select
                id="programas-edit"
                multiple
                value={programasAsignados}
                onChange={handleProgramasChange}
                required
              >
                {programas.map((p, i) => (
                  <option key={i} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  );
}
