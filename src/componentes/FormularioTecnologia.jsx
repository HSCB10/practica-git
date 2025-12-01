import { useState } from "react";

export default function FormularioTecnologia({ onAgregar }) {
  const [tecnologia, setTecnologia] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tecnologia.trim() === "") return;

    onAgregar(tecnologia);
    setTecnologia("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar tecnología</h3>
      <input
        type="text"
        value={tecnologia}
        onChange={(e) => setTecnologia(e.target.value)}
        placeholder="Ej: React, Node..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
