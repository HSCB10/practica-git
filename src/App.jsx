import CabeceraCV from "./componentes/CabeceraCV";
import Perfil from "./componentes/perfil";
import Experiencia from "./componentes/Experiencia";
import Educacion from "./componentes/Educacion";

function App() {
  return (
    <div style={{ width: "80%", margin: "0 auto", fontFamily: "Arial" }}>
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
    </div>
  );
}

export default App;
