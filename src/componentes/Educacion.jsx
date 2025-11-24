function Educacion() {
  const estudios = [
    {
      institucion: "SENA",
      curso: "Tecnólogo en Análisis y Desarrollo de Software",
      año: "2024"
    },
    {
      institucion: "SENA",
      curso: "Curso Complementario: Programación Básica en JavaScript",
      año: "2023"
    },
    {
      institucion: "Google Activate",
      curso: "Fundamentos de Marketing Digital",
      año: "2022"
    },
    {
      institucion: "Platzi",
      curso: "Curso de HTML y CSS",
      año: "2021"
    }
  ];

  return (
    <section>
      <h2>Educación</h2>
      {estudios.map((edu, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <h3>{edu.curso}</h3>
          <p>
            <strong>Institución:</strong> {edu.institucion}  
            <br />
            <strong>Año:</strong> {edu.año}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Educacion;
