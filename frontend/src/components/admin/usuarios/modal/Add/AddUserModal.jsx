import React, { useState } from "react";
import "./Modal.css"; 

export default function AddUserModal({
  open,
  onClose,
  onSave,
  programas = [],
}) {
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [programasAsignados, setProgramasAsignados] = useState([]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave && onSave({ nombre, rol, programasAsignados });
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
        <h2>Agregar Usuario</h2>
        <form
          className="modal-fx-form"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="fx-input-group">
            <label htmlFor="nombre-usuario">Nombre de Usuario</label>
            <div className="fx-input-wrapper">
              <input
                id="nombre-usuario"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="fx-input-group">
            <label htmlFor="rol-usuario">Rol</label>
            <div className="fx-input-wrapper">
              <select
                id="rol-usuario"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                required
              >
                <option value="">Selecciona un rol</option>
                <option value="Administrador">Administrador</option>
                <option value="Operador">Operador</option>
                <option value="Productor">Productor</option>
              </select>
            </div>
          </div>
          <div className="fx-input-group">
            <label htmlFor="programas-asignados">Programas Asignados</label>
            <div className="fx-input-wrapper">
              <select
                id="programas-asignados"
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
          <div className="modal-actions modal-fx-actions">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
