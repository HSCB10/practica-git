function Experiencia({ experiencias }) {
  return (
    <section>
      <h2>Experiencia</h2>
      <ul>
        {experiencias.map((exp, index) => (
          <li key={index}>
            <strong>{exp.cargo}</strong> – {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experiencia;
