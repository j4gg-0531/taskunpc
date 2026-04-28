import { useState } from "react";
import { Link } from "react-router-dom";
import { useTareas } from "../context/TareasContext";
import TareaCard from "./TareaCard";

function ListaTareas() {
  const { tareas, toggleTarea } = useTareas();
  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  const estiloBoton = (valor) => ({
    padding: "6px 16px",
    marginRight: "8px",
    borderRadius: "999px",
    border: "none",
    cursor: "pointer",
    backgroundColor: filtro === valor ? "#3b82f6" : "#e5e7eb",
    color: filtro === valor ? "white" : "black",
  });

  return (
    <section>
      {/* Botones de filtro */}
      <div style={{ marginBottom: "16px" }}>
        <button style={estiloBoton("todas")} onClick={() => setFiltro("todas")}>Todas</button>
        <button style={estiloBoton("pendientes")} onClick={() => setFiltro("pendientes")}>Pendientes</button>
        <button style={estiloBoton("completadas")} onClick={() => setFiltro("completadas")}>Completadas</button>
      </div>

      <h2>Mis Tareas ({tareasFiltradas.length})</h2>

      {tareasFiltradas.length === 0 && (
        <p style={{ color: "#6b7280" }}>No hay tareas en esta categoría.</p>
      )}

      {tareasFiltradas.map((tarea) => (
        <TareaCard
          key={tarea.id}
          {...tarea}
          onToggle={toggleTarea}
        />
      ))}

      {/* Botón para ir a nueva tarea */}
      <Link to="/nueva">
        <button style={{
          marginTop: "16px",
          padding: "10px 20px",
          backgroundColor: "#10b981",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}>
          + Nueva Tarea
        </button>
      </Link>
    </section>
  );
}

export default ListaTareas;