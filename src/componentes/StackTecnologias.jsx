function StackTecnologias() {
  const tecnologias = [
    { nombre: "HTML", nivel: "Alto" },
    { nombre: "CSS", nivel: "Alto" },
    { nombre: "JavaScript", nivel: "Intermedio" },
    { nombre: "React", nivel: "Intermedio" },
    { nombre: "Node.js", nivel: "Básico" },
    { nombre: "Git & GitHub", nivel: "Intermedio" },
    { nombre: "TailwindCSS", nivel: "Intermedio" }
  ];

  return (
    <section>
      <h2>Stack de Tecnologías</h2>
      <ul>
        {tecnologias.map((tec, index) => (
          <li key={index}>
            <strong>{tec.nombre}</strong> – {tec.nivel}
            {tec.nivel === "Alto" && <span> ⭐</span>}
            {tec.nivel === "Intermedio" && <span> 👍</span>}
            {tec.nivel === "Básico" && <span> 📘</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StackTecnologias;
