import { useState, useEffect } from "react";
import logo from "./assets/planium.svg";
import { getData, getPrices } from "./utils/index";
import { Figure, Img } from "./components/Figure/FigureStyled";
import {
  Form,
  H1,
  Fieldset,
  Input,
  Label,
  Select,
  Preco,
} from "./components/Form/FormStyled";
import { Button } from "./components/Button/ButtonStyled";

function App() {
  const [data, setData] = useState([]);

  const [plano, setPlano] = useState([]);
  const [preco, setPreco] = useState(0);
  const [idade, setIdade] = useState(0);

  const [registros, setRegistros] = useState([])

  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  useEffect(() => {
    calcularPreco();
  }, [plano, idade]);

  const handleSelectChange = (e) => {
    setPlano(e.target.value);
  };

  const handleIdadeChange = (e) => {
    setIdade(e.target.value);
    if (e.target.value.length > 0) setPreco(0);
  };

  function calcularPreco() {
    if (plano.length && idade > 0) {
      let precos = getPrices(plano, data[0], data[1]);

      setPreco(
        idade < 18
          ? precos.faixa1
          : idade >= 18 && idade <= 40
          ? precos.faixa2
          : precos.faixa3
      );
    } else setPreco(0);
  }

  return (
    <div className="App">
      <Figure>
        <Img src={logo} />
      </Figure>
      <Form>
        <H1>Cadastro</H1>
        <Select
          defaultValue={"disabled"}
          name="plano"
          onChange={handleSelectChange}
          required
        >
          <option value={"disabled"} disabled>
            Selecione um plano
          </option>
          {data[0]?.map((item, index) => (
            <option key={index} value={item.registro}>
              {item.nome}
            </option>
          ))}
        </Select>

        <Fieldset
        names>
          <Label htmlFor="nome">Nome</Label>
          <Label htmlFor="sobrenome">Sobrenome</Label>
          <Input name="nome" required />
          <Input name="sobrenome" required />
        </Fieldset>

        <Label htmlFor="idade">Idade</Label>
        <Fieldset section="plans">
          <Input
            type={"number"}
            name="idade"
            onChange={handleIdadeChange}
            required
          />
          <Button>Adicionar +</Button>
        </Fieldset>

        <Preco>
          <p>Valor:</p>
          <p>R$ {preco}.00</p>
        </Preco>

        <Button primary>Finalizar</Button>
      </Form>
    </div>
  );
}

export default App;
