import { tareasIniciales } from "../data/tareas";

function Header() {
  // Calculamos las pendientes aquí mismo
  const pendientes = tareasIniciales.filter((t) => !t.completada).length;

  return (
    <header style={{
      backgroundColor: "#3b82f6",
      color: "white",
      padding: "16px 24px",
      marginBottom: "24px",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <h1 style={{ margin: 0 }}>📋 TaskUPC</h1>
      <span style={{
        backgroundColor: "#1d4ed8",
        padding: "4px 12px",
        borderRadius: "999px",
        fontSize: "14px",
      }}>
        {pendientes} tarea{pendientes !== 1 ? "s" : ""} pendiente{pendientes !== 1 ? "s" : ""}
      </span>
    </header>
  );
}

export default Header;