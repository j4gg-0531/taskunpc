import { Link } from "react-router-dom";

function TareaCard({ id, titulo, materia, fecha, completada, onToggle }) {
  return (
    <article style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "12px",
      backgroundColor: completada ? "#f0fff4" : "#fff8f0",
      opacity: completada ? 0.75 : 1,
    }}>
      <h3 style={{
        margin: "0 0 8px 0",
        textDecoration: completada ? "line-through" : "none",
        color: completada ? "#6b7280" : "inherit",
      }}>
        {titulo}
      </h3>
      <p style={{ margin: "0 0 12px 0" }}>
        📚 {materia} · 📅 {fecha}
      </p>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <button
          onClick={() => onToggle(id)}
          style={{
            padding: "4px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            backgroundColor: completada ? "#d1fae5" : "#fef3c7",
          }}
        >
          {completada ? "✅ Completada" : "⏳ Marcar como hecha"}
        </button>
        <Link to={`/tarea/${id}`} style={{ fontSize: "14px", color: "#3b82f6" }}>
          Ver detalle →
        </Link>
      </div>
    </article>
  );
}

TareaCard.defaultProps = {
  completada: false,
  fecha: "Sin fecha",
};

export default TareaCard;