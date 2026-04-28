import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();
  const [form, setForm] = useState({ titulo: "", materia: "", fecha: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.titulo || !form.materia) return alert("Título y materia son obligatorios.");
    agregarTarea({ ...form, completada: false });
    navigate("/");
  }

  const estiloInput = {
    width: "100%",
    padding: "8px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  return (
    <div>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <label>Título</label>
        <input
          style={estiloInput}
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          placeholder="Ej: Parcial de Álgebra"
        />
        <label>Materia</label>
        <input
          style={estiloInput}
          name="materia"
          value={form.materia}
          onChange={handleChange}
          placeholder="Ej: Matemáticas"
        />
        <label>Fecha de entrega</label>
        <input
          style={estiloInput}
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
        />
        <button
          type="submit"
          style={{
            padding: "10px 24px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginRight: "12px",
          }}
        >
          Agregar Tarea
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          style={{
            padding: "10px 24px",
            backgroundColor: "#e5e7eb",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default NuevaTarea;