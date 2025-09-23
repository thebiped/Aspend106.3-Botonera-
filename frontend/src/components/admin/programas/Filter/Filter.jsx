import React from "react";
import { Search, Radio } from "lucide-react";
import "../../../../assets/css/Admins/Programas.css";

function Filter({ search, setSearch, category, setCategory, tab, setTab }) {
  return (
    <section className="programs-filters">
      <div className="programs-filters-title">Filtrar Programas</div>
      <div className="programs-filters-row">
        <div className="programs-search-wrapper">
          <Search size={18} color="#981aff" />
          <input
            className="programs-search"
            placeholder="Buscar programas, efectos, intro u outro..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="programs-tabs">
        <button
          className={`programs-tab${
            tab === "institucionales" ? " programs-tab-active" : ""
          }`}
          onClick={() => setTab("institucionales")}
        >
          <Radio size={18} /> Fx Institucionales
        </button>
        <button
          className={`programs-tab${
            tab === "programas" ? " programs-tab-active" : ""
          }`}
          onClick={() => setTab("programas")}
        >
          <Radio size={18} /> Programas Fx
        </button>
      </div>
    </section>
  );
}

export default Filter;
