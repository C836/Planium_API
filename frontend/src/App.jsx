import { useState, useEffect, useRef } from "react";
import logo from "./assets/planium.svg";
import { getData, getPrices } from "./utils/index";
import { Conteiner } from "./components/Conteiner/Conteiner";
import { Figure, Img } from "./components/Figure/Figure";
import {
  Form,
  H1,
  Fieldset,
  Input,
  Label,
  Select,
  Preco,
} from "./components/Form/Form";
import { Button } from "./components/Button/Button";
import { Ul, Li } from "./components/Registros/Registros";

function App() {
  const [data, setData] = useState([]);

  const [plano, setPlano] = useState();
  const [preco, setPreco] = useState(0);
  const [idade, setIdade] = useState(0);

  const [registros, setRegistros] = useState([]);

  const formRef = useRef(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.nativeEvent.submitter.value === "adicionar") {
      adicionar(e.target);
    } else {
      finalizar();
    }
  };

  const adicionar = (cadastro) => {
    const usuario = {
      nome: `${cadastro.nome.value} ${cadastro.sobrenome.value}`,
      idade: cadastro.idade.value,
      preco: preco,
    };
    setRegistros((registros) => [...registros, usuario]);
    formRef.current.reset();
    setPreco(0);
  };

  const finalizar = () => {
    console.log("fin");
  };

  function calcularPreco() {
    if (plano && idade > 0) {
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
      <Conteiner>
        <Figure>
          <Img src={logo} />
        </Figure>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <H1>Cadastro</H1>
          <Select
            name="plano"
            onChange={handleSelectChange}
            value={plano}
            multiple={false}
            required
            disabled={registros.length > 0 ? true : false}
          >
            <option label="Selecione um plano" value={""} />
            {data[0]?.map((item, index) => (
              <option key={index} value={item.registro}>
                {item.nome}
              </option>
            ))}
          </Select>

          <Fieldset names>
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
            <Button value={"adicionar"}>Adicionar +</Button>
          </Fieldset>

          <Preco>
            <p>Valor {registros.length ? "total" : ""}:</p>
            <p>
              R$
              {registros.length
                ? registros.reduce(function (previousValue, currentValue) {
                    return previousValue + currentValue.preco;
                  }, 0) + preco
                : preco}
              .00
            </p>
          </Preco>

          <Button value={"finalizar"} primary>
            Finalizar
          </Button>
        </Form>

        <Ul>
          {registros?.map((reg, index) => (
            <Li key={index}>
              <span>
                {reg.nome}, {reg.idade} anos
              </span>
              <span>R${reg.preco}.00</span>
            </Li>
          ))}
        </Ul>
      </Conteiner>
    </div>
  );
}

export default App;
