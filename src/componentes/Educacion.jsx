function Educacion() {
  const educacion = [
    { institucion: "SENA", curso: "Tecnólogo ADSO", año: 2024 },
    { institucion: "Platzi", curso: "Curso Profesional de JavaScript", año: 2023 },
    { institucion: "FreeCodeCamp", curso: "Responsive Web Design", año: 2022 },
    { institucion: "Udemy", curso: "React desde Cero", año: 2023 },
    { institucion: "Google Activate", curso: "Marketing Digital", año: 2021 },
    { institucion: "SENA", curso: "Curso Básico de Python", año: 2022 },
    { institucion: "Coursera", curso: "Algorithm Basics", año: 2023 },
    { institucion: "Cisco Networking", curso: "Introduction to Cybersecurity", año: 2022 },
    { institucion: "Microsoft Learn", curso: "Azure Foundations", año: 2024 },
    { institucion: "EDteam", curso: "Git & GitHub Profesional", año: 2023 }
  ];

  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {educacion.map((edu, index) => (
          <li key={index}>
            <strong>{edu.curso}</strong> – {edu.institucion} ({edu.año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Educacion;
