function Experiencia() {
  const experiencias = [
    {
      cargo: "Desarrollador Front-End Jr.",
      empresa: "Tech Solutions",
      año: 2023,
      descripcion: "Desarrollo de interfaces con React y mantenimiento de componentes."
    },
    {
      cargo: "Practicante de Desarrollo",
      empresa: "Innovasoft",
      año: 2022,
      descripcion: "Soporte en desarrollo web y corrección de bugs."
    },
    {
      cargo: "Proyecto Freelance: Landing Page",
      empresa: "Cliente Independiente",
      año: 2023,
      descripcion: "Diseño completo de landing page con HTML, CSS y JS."
    },
    {
      cargo: "Proyecto: App de Tareas",
      empresa: "Proyecto Personal",
      año: 2024,
      descripcion: "Aplicación CRUD con React y localStorage."
    },
    {
      cargo: "Soporte Técnico",
      empresa: "ServiTech",
      año: 2021,
      descripcion: "Diagnóstico y solución de fallos de software y hardware."
    },
    {
      cargo: "Administrador de Contenidos",
      empresa: "Publimark",
      año: 2020,
      descripcion: "Gestión de contenido web corporativo."
    },
    {
      cargo: "Proyecto: API Node",
      empresa: "Proyecto Personal",
      año: 2024,
      descripcion: "Creación de API REST con Node.js y Express."
    },
    {
      cargo: "Diseñador Web",
      empresa: "WebMaster Co.",
      año: 2021,
      descripcion: "Diseño visual en Figma y maquetación CSS."
    },
    {
      cargo: "Proyecto: Dashboard",
      empresa: "Proyecto Académico",
      año: 2023,
      descripcion: "Dashboard interactivo con Chart.js."
    },
    {
      cargo: "Tester QA Jr.",
      empresa: "TestingPro",
      año: 2022,
      descripcion: "Pruebas funcionales y reporte de errores."
    }
  ];

  return (
    <section>
      <h2>Experiencia</h2>
      <ul>
        {experiencias.map((exp, index) => (
          <li key={index}>
            <strong>{exp.cargo}</strong> – {exp.empresa} ({exp.año})
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experiencia;
