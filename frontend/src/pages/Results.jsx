import { useState, useEffect } from "react";
import { getData } from "../utils";

import {
  Beneficiarios,
  Cliente,
  Divisor,
  Nome,
  Total,
} from "../components/Beneficiarios/Beneficiarios";

export default function Results() {
  const [panel, setPanel] = useState([]);

  useEffect(() => {
    getData("get").then((e) => setPanel(e));
  }, []);

  return (
    <Beneficiarios>
      {panel?.map((item, index) => (
        <Cliente key={index}>
          <h3>{item.plano}</h3>
          {item.beneficiarios.map((cliente, clienteIndex) => (
            <div key={clienteIndex}>
              <Nome>
                {cliente.nome}, {cliente.idade} anos
              </Nome>
              {item.total !== cliente.preco && (
                <>
                  <small>R${cliente.preco}.00</small>
                  {item.beneficiarios[clienteIndex + 1] ? <Divisor /> : ""}
                </>
              )}
            </div>
          ))}
          <Total>R${item.total}.00</Total>
        </Cliente>
      ))}
    </Beneficiarios>
  );
}
