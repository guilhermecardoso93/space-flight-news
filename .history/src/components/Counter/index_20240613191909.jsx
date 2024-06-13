import { useState } from "react";

export function Counter() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ marginTop: "20px", marginLeft: "20px" }}>
      <h1>{contador}</h1>
      <div>
        <button
          onClick={() => {
            setContador = contador - 1;
          }}
        >
          Diminuir
        </button>
        <button
          onClick={() => {
            "aumentar";
          }}
        >
          Aumentar
        </button>
      </div>
    </div>
  );
}
