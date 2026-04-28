import { useParams, useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function DetalleTarea() {
  const { id } = useParams();
  const { tareas, eliminarTarea, toggleTarea } = useTareas();
  const navigate = useNavigate();

  const tarea = tareas.find((t) => t.id === Number(id));

  if (!tarea) {
    return (
      <div>
        <p>Tarea no encontrada.</p>
        <button onClick={() => navigate("/")}>← Volver</button>
      </div>
    );
  }

  function handleEliminar() {
    if (confirm("¿Eliminar esta tarea?")) {
      eliminarTarea(tarea.id);
      navigate("/");
    }
  }

  return (
    <div style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>{tarea.titulo}</h2>
      <p>📚 Materia: <strong>{tarea.materia}</strong></p>
      <p>📅 Fecha: <strong>{tarea.fecha || "Sin fecha"}</strong></p>
      <p>Estado: <strong>{tarea.completada ? "✅ Completada" : "⏳ Pendiente"}</strong></p>

      <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
        <button
          onClick={() => { toggleTarea(tarea.id); navigate("/"); }}
          style={{ padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer", backgroundColor: "#fef3c7" }}
        >
          {tarea.completada ? "Marcar como pendiente" : "Marcar como completada"}
        </button>
        <button
          onClick={handleEliminar}
          style={{ padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer", backgroundColor: "#fee2e2", color: "#b91c1c" }}
        >
          🗑 Eliminar
        </button>
        <button
          onClick={() => navigate("/")}
          style={{ padding: "8px 16px", borderRadius: "6px", border: "none", cursor: "pointer", backgroundColor: "#e5e7eb" }}
        >
          ← Volver
        </button>
      </div>
    </div>
  );
}

export default DetalleTarea;