import { tareasIniciales } from "../data/tareas";
import TareaCard from "./TareaCard";

function ListaTareas() {
  return (
    <section>
      <h2>Mis Tareas</h2>
      {tareasIniciales.map((tarea) => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </section>
  );
}

export default ListaTareas;