// src/components/ListaTareas.jsx
import TareaCard from './TareaCard';
import { tareasIniciales } from '../data/tareas';

function ListaTareas() {
  return (
    <section>
      <h2>Mis Pendientes</h2>
      {tareasIniciales.map((tarea) => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </section>
  );
}

export default ListaTareas;