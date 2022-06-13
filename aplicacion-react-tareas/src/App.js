import "./App.css";
import Tarea from "./componentes/Tarea";

function App() {
  return (
    <div className="aplicacion-tareas">
      <h1>Aplicación de taeras Pablo Mattalia</h1>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <Tarea texto={"Aprender React"} />
      </div>
    </div>
  );
}

export default App;
