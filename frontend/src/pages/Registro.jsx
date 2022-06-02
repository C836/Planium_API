import { useState, useEffect, useRef } from "react";
import { getData, getPrices, postApi } from "./../utils/index";
import {
  Form,
  H1,
  Fieldset,
  Input,
  Label,
  Select,
  Preco,
} from "./../components/Form/Form";
import { Button } from "./../components/Button/Button";
import { Ul, Li } from "./../components/Registros/Registros";
import { registro } from "./../models/registro";

export default function Registro() {
  useEffect(() => {
    getData().then((e) => setData(e));
  }, []);

  const [data, setData] = useState([]);

  const [cliente, setCliente] = useState({ plano: "", preco: 0, idade: 0 });
  const { plano, preco, idade } = cliente;

  const [registros, setRegistros] = useState([]);

  const formRef = useRef(null);
  const [validate, setValidate] = useState(true);

  const handleSelectChange = (e) => {
    setCliente((cliente) => ({ ...cliente, plano: e.target.value }));
  };

  const handleIdadeChange = (e) => {
    setCliente(cliente => ({...cliente, idade: e.target.value}))
    if (e.target.value.length > 0)
      setCliente((cliente) => ({ ...cliente, preco: 0 }));
  };

  const handleFinalizar = () => {
    if (
      formRef.current.nome.value === "" &&
      formRef.current.sobrenome.value === "" &&
      formRef.current.idade.value === "" &&
      registros.length
    ) {
      setValidate(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.nativeEvent.submitter.value === "adicionar") {
      const usuario = {
        nome: `${e.target.nome.value} ${e.target.sobrenome.value}`,
        idade: e.target.idade.value,
        preco: preco,
      };

      setRegistros((registros) => [...registros, usuario]);
      setCliente((cliente) => ({ ...cliente, preco: 0 }));
      formRef.current.reset();
    } else {
      const usuario = {
        nome: `${formRef.current.nome.value} ${formRef.current.sobrenome.value}`,
        idade: formRef.current.idade.value,
        preco: preco,
      };

      postApi(
        new registro(
          usuario.idade ? registros.concat(usuario) : registros,
          plano
        )
      ).then(
        () => setRegistros([]),
        setCliente((cliente) => ({ ...cliente, preco: 0 })),
        formRef.current.reset()
      );
    }
  };

  function calcularPreco() {
    if (plano && idade > 0) {
      let precos = getPrices(registros.length, plano, data[0], data[1]);
      console.log(precos);

      setCliente((cliente) => ({
        ...cliente,
        preco:
          idade < 18
            ? precos.faixa1
            : idade >= 18 && idade <= 40
            ? precos.faixa2
            : precos.faixa3,
      }));
    } else setCliente(cliente => ({...cliente, preco: 0}));
  }

  useEffect(() => {
    calcularPreco();
  }, [plano, idade]);

  return (
    <>
      <Form
        noValidate={validate ? false : true}
        ref={formRef}
        onSubmit={handleSubmit}
      >
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
          <p>Valor {registros.length && "total"}:</p>
          <p>
            R$
            {registros.length
              ? registros.reduce((sum, value) => {
                  return sum + value.preco;
                }, 0) + preco
              : preco}
            .00
          </p>
        </Preco>

        <Button onClick={handleFinalizar} value={"finalizar"} primary>
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
    </>
  );
}
