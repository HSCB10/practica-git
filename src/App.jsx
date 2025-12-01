import { useState, useCallback } from "react";

// Componentes del CV
import CabeceraCV from "./componentes/CabeceraCV";
import Perfil from "./componentes/Perfil";
import Experiencia from "./componentes/Experiencia";
import Educacion from "./componentes/Educacion";
import StackTecnologias from "./componentes/StackTecnologias";
import Habilidades from "./componentes/Habilidades";
import ToggleHabilidades from "./componentes/ToggleHabilidades";
import FormularioTecnologia from "./componentes/FormularioTecnologia";

// Datos iniciales
import cvData from "./data/cvData.js";

function App() {
  const {
    datosPersonales,
    resumenProfesional,
    experiencias,
    estudios,
    tecnologias: tecnologiasIniciales,
    habilidades,
  } = cvData;

  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  const agregarTecnologia = useCallback((tecnologiaNueva) => {
    setTecnologias((prev) => [...prev, tecnologiaNueva]);
  }, []);

  return (
    <>
      {/* CABECERA */}
      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      {/* PERFIL */}
      <Perfil resumen={resumenProfesional} />

      {/* EXPERIENCIA */}
      <Experiencia experiencias={experiencias} />

      {/* EDUCACIÓN */}
      <Educacion estudios={estudios} />

      {/* TECNOLOGÍAS */}
      <StackTecnologias tecnologias={tecnologias} />

      {/* FORMULARIO PARA AGREGAR TECNOLOGÍAS */}
      <FormularioTecnologia onAgregar={agregarTecnologia} />

      {/* HABILIDADES */}
      <ToggleHabilidades>
        <Habilidades habilidades={habilidades} />
      </ToggleHabilidades>
    </>
  );
}

export default App;
