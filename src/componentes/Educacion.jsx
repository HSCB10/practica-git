function Educacion({ estudios }) {
  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {estudios.map((edu, index) => (
          <li key={index}>
            <strong>{edu.curso}</strong> — {edu.institucion} ({edu.año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Educacion;

