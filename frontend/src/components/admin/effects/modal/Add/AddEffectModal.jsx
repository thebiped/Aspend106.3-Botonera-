import React, { useState } from "react";
import "./AddEffectModalAdmin.css"; 

export default function AddEffectModal({
  open,
  onClose,
  onSave,
  programs = [],
}) {
  const [programa, setPrograma] = useState("");
  const [tipo, setTipo] = useState("");
  const [fxCount, setFxCount] = useState("");
  const [operador, setOperador] = useState("");
  const [productor, setProductor] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave && onSave({ programa, tipo, fxCount, operador, productor });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal modal-fx">
        <h2>Agregar Efecto</h2>
        <form className="modal-fx-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="fx-input-group">
            <label htmlFor="programa">Nombre del Programa</label>
            <div className="fx-input-wrapper">
              <select
                id="programa"
                value={programa}
                onChange={(e) => setPrograma(e.target.value)}
                required
              >
                <option value="">Selecciona un programa</option>
                {programs.map((p, i) => (
                  <option key={i} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="fx-input-group">
            <label htmlFor="tipo">Tipo</label>
            <div className="fx-input-wrapper">
              <select
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              >
                <option value="">Selecciona un tipo</option>
                <option value="Operador">Operador</option>
                <option value="Jefe de Operadores">Jefe de Operadores</option>
                <option value="Productor">Productor</option>
              </select>
            </div>
          </div>

          <div className="fx-input-group">
            <label htmlFor="fxCount">Cantidad de FX</label>
            <div className="fx-input-wrapper">
              <input
                id="fxCount"
                type="number"
                min="0"
                value={fxCount}
                onChange={(e) => setFxCount(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="fx-input-group">
            <label htmlFor="operador">Operadores</label>
            <div className="fx-input-wrapper">
              <input
                id="operador"
                value={operador}
                onChange={(e) => setOperador(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="fx-input-group">
            <label htmlFor="productor">Productores</label>
            <div className="fx-input-wrapper">
              <input
                id="productor"
                value={productor}
                onChange={(e) => setProductor(e.target.value)}
                required
              />
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
