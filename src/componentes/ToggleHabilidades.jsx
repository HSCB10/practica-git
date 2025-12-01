import { useState } from "react";

export default function ToggleHabilidades({ children }) {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {visible && <div>{children}</div>}
    </div>
  );
}
