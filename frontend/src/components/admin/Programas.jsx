import React from "react";
import { Home, Radio, Users, Volume2, Plus, Search, Play,AudioLines, Settings } from "lucide-react";
import "../../assets/css/Programas.css";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

export default function Programas() {
  return (
    <div className="dashboard-root">
        <Sidebar />
        <div className="container">
            <div className="container-bg" />
                {/* Header */}
                <div className="programs-header">
                    <div className="programs-header-info">
                        <h1 className="programs-title">Gestión de Programas</h1>
                        <p className="programs-desc">
                        Consulta y administra los programas que tienes asignados. Desde
                        aquí puedes ver su estado y organizar los recursos asociados.
                        </p>
                    </div>
                    <button className="programs-add-btn"><Plus size={18} /> Agregar FX</button>
                </div>

                {/* Filtros */}
                <main className="main-container">
                    <section className="programs-filters">
                        <div className="programs-filters-title">Filtrar Programas</div>
                        <div className="programs-filters-row">
                            <div className="programs-search-wrapper">
                                <Search size={18} color="#981aff"/>
                                <input className="programs-search" placeholder="Buscar programas, efectos, intro u outro..."/>
                            </div>
                            <select className="programs-select">
                                <option>Todas las categorías</option>
                                <option>Intro</option>
                                <option>Outro</option>
                                <option>Separator</option>
                                <option>Id</option>
                            </select>
                        </div>
                        <div className="programs-tabs">
                            <button className="programs-tab programs-tab-active"><Radio size={18} /> Fx Institucionales</button>
                            <button className="programs-tab"><Radio size={18}/> Programas Fx</button>
                        </div>
                    </section>

                        {/* Biblioteca de Efectos */}
                    <section className="effects-library">
                        <div className="effects-library-title">
                            <Volume2 size={20} style={{ marginRight: 8, verticalAlign: "middle" }}/>{" "}
                            Biblioteca de Efectos
                        </div>
                        <div className="effects-cards">
                            {/* Card 1 */}
                            <div className="effect-card">
                                <div className="effect-card-content">
                                    <span className="effect-card-icon">
                                        <Volume2 size={25} />
                                    </span>
                                    <div className="content-info">
                                        <span className="effect-card-title">Intro Noticias</span>
                                        <div className="effect-card-meta">
                                            <span>00:08</span>
                                            <span>Institucional</span>
                                            <span className="effect-card-label intro">intro</span>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="effect-card-actions">
                                    <button className="effect-card-play">
                                        <Play size={16} /> Reproducir
                                    </button>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="effect-card">
                                <div className="effect-card-content">
                                    <span className="effect-card-icon">
                                        <Volume2 size={25} />
                                    </span>
                                    <div className="content-info">
                                        <span className="effect-card-title">Separador Comercial</span>
                                        <div className="effect-card-meta">
                                            <span>00:20</span>
                                            <span>Institucional</span>
                                            <span className="effect-card-label separator">separator</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="effect-card-actions">
                                    <button className="effect-card-play">
                                    <Play size={16} /> Reproducir
                                    </button>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="effect-card">
                                <div className="effect-card-content">
                                    <span className="effect-card-icon">
                                        <Volume2 size={25} />
                                    </span>
                                    <div className="content-info">
                                        <span className="effect-card-title">Cierre Programa</span>
                                        <div className="effect-card-meta">
                                            <span>00:02</span>
                                            <span>Institucional</span>
                                            <span className="effect-card-label outro">outro</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="effect-card-actions">
                                    <button className="effect-card-play">
                                        <Play size={16} /> Reproducir
                                    </button>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="effect-card">
                                <div className="effect-card-content">
                                    <span className="effect-card-icon">
                                        <Volume2 size={25} />
                                    </span>
                                    <div className="content-info">
                                        <span className="effect-card-title">Identificación Emisora</span>
                                        <div className="effect-card-meta">
                                            <span>00:02</span>
                                            <span>Institucional</span>
                                            <span className="effect-card-label id">id</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="effect-card-actions">
                                    <button className="effect-card-play">
                                        <Play size={16} /> Reproducir
                                    </button>
                                </div>
                            </div>
                            {/* Card 5 */}
                            <div className="effect-card">
                                <div className="effect-card-content">
                                    <span className="effect-card-icon">
                                        <Volume2 size={25} />
                                    </span>
                                    <div className="content-info">
                                        <span className="effect-card-title">Aspend 102.3</span>
                                        <div className="effect-card-meta">
                                            <span>3:20</span>
                                            <span>Institucional</span>
                                            <span className="effect-card-label id">id</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="effect-card-actions">
                                    <button className="effect-card-play">
                                        <Play size={16} /> Reproducir
                                    </button>
                                </div>
                            </div>
                            {/* Card 6 */}
                            <div className="effect-card">
                                <div className="effect-card-content">
                                    <span className="effect-card-icon">
                                        <Volume2 size={25} />
                                    </span>
                                    <div className="content-info">
                                        <span className="effect-card-title">Spotfite</span>
                                        <div className="effect-card-meta">
                                            <span>10:00</span>
                                            <span>Institucional</span>
                                            <span className="effect-card-label id">id</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="effect-card-actions">
                                    <button className="effect-card-play">
                                        <Play size={16} /> Reproducir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
  );
}
