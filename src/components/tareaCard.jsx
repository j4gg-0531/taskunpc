function TareaCard({ titulo, materia, fecha, completada }) {
  return (
    <article style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "12px",
      backgroundColor: completada ? "#f0fff4" : "#fff8f0"
    }}>
      <h3 style={{ margin: "0 0 8px 0" }}>{titulo}</h3>
      <p style={{ margin: "0 0 4px 0" }}>
        📚 {materia} · 📅 {fecha}
      </p>
      <span>
        {completada ? "✅ Completada" : "⏳ Pendiente"}
      </span>
    </article>
  );
}

// Props por defecto por si algún valor llega undefined
TareaCard.defaultProps = {
  completada: false,
  fecha: "Sin fecha",
};

export default TareaCard;