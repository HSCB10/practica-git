import CabeceraCV from "./componentes/CabeceraCV";
import Perfil from "./componentes/Perfil";
import Experiencia from "./componentes/Experiencia";
import Educacion from "./componentes/Educacion";

import {
  datosPersonales,
  resumenProfesional,
  listaExperiencias,
  listaEstudios
} from "./data";

function App() {
  return (
    <>
      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <Perfil resumen={resumenProfesional} />

      <Experiencia experiencias={listaExperiencias} />

      <Educacion estudios={listaEstudios} />
    </>
  );
}

export default App;
