import React, { useState } from "react";
import "./AddFxModalOperador.css"; 

export default function AddFxModal({ open, onClose, onSave, programs = [] }) {
  const [title, setTitle] = useState("");
  const [program, setProgram] = useState("");
  const [duration, setDuration] = useState("");
  const [tags, setTags] = useState([]);
  const [audioFile, setAudioFile] = useState(null);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFx = {
      title,
      program,
      duration,
      tags,
      audio: audioFile ? URL.createObjectURL(audioFile) : null,
    };
    onSave && onSave(newFx);
    onClose();
  };

  const handleTagsChange = (e) => {
    const options = Array.from(e.target.options);
    setTags(options.filter((o) => o.selected).map((o) => o.value));
  };

  return (
    <div className="operador-modal-backdrop">
      <div className="operador-modal operador-modal-fx">
        <h2>Agregar Nuevo FX</h2>
        <form className="operador-modal-fx-form" onSubmit={handleSubmit}>
          <div className="operador-fx-input-group">
            <label htmlFor="fx-title">Nombre del FX</label>
            <div className="operador-fx-input-wrapper">
              <input
                id="fx-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="operador-fx-input-group">
            <label htmlFor="fx-program">Programa</label>
            <div className="operador-fx-input-wrapper">
              <select
                id="fx-program"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
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

          <div className="operador-fx-input-group">
            <label htmlFor="fx-duration">Duración</label>
            <div className="operador-fx-input-wrapper">
              <input
                id="fx-duration"
                type="text"
                placeholder="00:05"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="operador-fx-input-group">
            <label htmlFor="fx-tags">Tags</label>
            <div className="operador-fx-input-wrapper">
              <select
                id="fx-tags"
                multiple
                value={tags}
                onChange={handleTagsChange}
              >
                <option value="intro">Intro</option>
                <option value="transition">Transition</option>
                <option value="separator">Separator</option>
                <option value="special">Special</option>
              </select>
            </div>
          </div>

          <div className="operador-fx-input-group">
            <label htmlFor="fx-audio">Archivo de Audio</label>
            <div className="operador-fx-input-wrapper">
              <input
                id="fx-audio"
                type="file"
                accept="audio/*"
                onChange={(e) => setAudioFile(e.target.files[0])}
                required
              />
            </div>
          </div>

          <div className="operador-modal-actions">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">Guardar FX</button>
          </div>
        </form>
      </div>
    </div>
  );
}
