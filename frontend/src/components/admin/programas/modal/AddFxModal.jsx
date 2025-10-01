import React, { useState } from "react";
import { Camera, CheckCircle } from "lucide-react";
import "./AddFxModal.css"; 

function AddFxModal({ open, onClose, onSave }) {
  const [type, setType] = useState("institucional");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const categoriasPorTipo = {
    institucional: [
      { value: "intro", label: "Intro" },
      { value: "outro", label: "Outro" },
      { value: "separator", label: "Separator" },
      { value: "id", label: "Id" },
    ],
    programa: [
      { value: "intro", label: "Intro" },
      { value: "outro", label: "Outro" },
      { value: "separator", label: "Separator" },
      { value: "id", label: "Id" },
      { value: "transition", label: "Transition" },
      { value: "special", label: "Special" },
    ],
  };

  if (!open) return null;

  // Función para acortar el nombre del archivo
  const resumirNombre = (nombre) => {
    if (!nombre) return "";
    if (nombre.length <= 18) return nombre;
    const partes = nombre.split(".");
    const ext = partes.length > 1 ? "." + partes.pop() : "";
    return nombre.slice(0, 8) + "..." + nombre.slice(-6) + ext;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave && onSave({ type, title, category, file });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal modal-fx">
        <h2>Agregar FX</h2>
        <div className="modal-fx-content">
          <form className="modal-fx-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="fx-input-group">
              <label htmlFor="fx-type">Tipo</label>
              <div className="fx-input-wrapper">
                <Camera size={20} color="#b8b8b8" />
                <select id="fx-type" value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="institucional">Institucional</option>
                  <option value="programa">Programa</option>
                </select>
              </div>
            </div>

            <div className="fx-input-group">
              <label htmlFor="fx-title">Nombre</label>
              <div className="fx-input-wrapper">
                <CheckCircle size={20} color="#b8b8b8" />
                <input
                  id="fx-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="fx-input-group">
              <label htmlFor="fx-category">Categoría</label>
              <div className="fx-input-wrapper">
                <Camera size={20} color="#b8b8b8" />
                <select
                  id="fx-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Selecciona una categoría</option>
                  {categoriasPorTipo[type].map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </form>

          <div className="modal-fx-sound">
            <label htmlFor="audio-upload" className="modal-fx-sound-label">
              <div className={`modal-fx-sound-box${file ? " uploaded" : ""}`}>
                {file ? (
                  <CheckCircle color="#00ffe7" size={38} className="modal-fx-sound-check" />
                ) : (
                  <Camera size={38} color="#b8b8b8" />
                )}
              </div>
              <input
                id="audio-upload"
                type="file"
                accept="audio/*"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
              <span className="modal-fx-sound-text">Agregar sonido</span>
            </label>

            {file && (
              <div className="modal-fx-sound-filename-wrapper">
                <span className="modal-fx-sound-filename">{resumirNombre(file.name)}</span>
                <button type="button" onClick={() => setFile(null)}>✕</button>
              </div>
            )}
          </div>
        </div>

        <div className="modal-actions modal-fx-actions">
          <button type="button" onClick={onClose}>Cancelar</button>
          <button type="submit" onClick={handleSubmit}>Guardar</button>
        </div>
      </div>
    </div>
  );
}

export default AddFxModal;