import React, { useState, useEffect } from "react";
import "./EditEffectModalAdmin.css"; 

export default function EditEffectModal({
  open,
  onClose,
  onSave,
  effect,
  programs = [],
}) {
  const [programa, setPrograma] = useState("");
  const [tipo, setTipo] = useState("");
  const [fxCount, setFxCount] = useState("");
  const [operador, setOperador] = useState("");
  const [productor, setProductor] = useState("");

  useEffect(() => {
    if (effect) {
      setPrograma(effect.name || "");
      setTipo(effect.type || "");
      setFxCount(effect.fx || "");
      setOperador(effect.operators || "");
      setProductor(effect.producers || "");
    }
  }, [effect, open]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave && onSave({ programa, tipo, fxCount, operador, productor });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal modal-fx">
        <h2>Editar Efecto</h2>
        <form className="modal-fx-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="fx-input-group">
            <label htmlFor="programa-edit">Nombre del Programa</label>
            <div className="fx-input-wrapper">
              <select
                id="programa-edit"
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
            <label htmlFor="tipo-edit">Tipo</label>
            <div className="fx-input-wrapper">
              <select
                id="tipo-edit"
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
            <label htmlFor="fxCount-edit">Cantidad de FX</label>
            <div className="fx-input-wrapper">
              <input
                id="fxCount-edit"
                type="number"
                min="0"
                value={fxCount}
                onChange={(e) => setFxCount(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="fx-input-group">
            <label htmlFor="operador-edit">Operadores</label>
            <div className="fx-input-wrapper">
              <input
                id="operador-edit"
                value={operador}
                onChange={(e) => setOperador(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="fx-input-group">
            <label htmlFor="productor-edit">Productores</label>
            <div className="fx-input-wrapper">
              <input
                id="productor-edit"
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
            <button type="submit">Guardar Cambios</button>
          </div>
        </form>
      </div>
    </div>
  );
}
