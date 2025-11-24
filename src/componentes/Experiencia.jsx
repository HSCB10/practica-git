function Experiencia() {
  const experiencias = [
    {
      cargo: "Desarrollador Front-End Jr.",
      empresa: "TechSolutions",
      año: "2023",
      descripcion: "Apoyo en el diseño de interfaces y desarrollo de componentes en React."
    },
    {
      cargo: "Asistente de Soporte Técnico",
      empresa: "Sena - Proyecto Académico",
      año: "2022",
      descripcion: "Brindé soporte básico, instalación de software y asesoría a usuarios."
    },
    {
      cargo: "Proyecto Personal: Página Web de Portafolio",
      empresa: "Proyecto propio",
      año: "2024",
      descripcion: "Diseño y desarrollo de un portafolio web con HTML, CSS y JavaScript."
    },
    {
      cargo: "Proyecto Academico: Sistema de Inventario",
      empresa: "Sena",
      año: "2024",
      descripcion: "Construcción de un CRUD básico utilizando JavaScript y almacenamiento local."
    }
  ];

  return (
    <section>
      <h2>Experiencia</h2>
      {experiencias.map((exp, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <h3>{exp.cargo} - {exp.empresa} ({exp.año})</h3>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
}

export default Experiencia;
