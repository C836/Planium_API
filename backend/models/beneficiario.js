export class beneficiario {
  constructor(plano, dados, precos) {
    (this.plano = plano),
    (this.beneficiarios = this.calcularRegistros(dados, precos)),
    (this.total = this.calcularTotal());
  }

  calcularPreco(idade, precos) {
    if (idade < 18) {
      return precos.faixa1;

    } else if (idade >= 18 && idade <= 40) {
        return precos.faixa2;

    } else if (idade > 40) {
        return precos.faixa3;
    }
  }

  calcularRegistros(dados, precos) {
    return dados.map((item) => {
      let registro = {
        nome: item.nome,
        idade: item.idade,
        preco: this.calcularPreco(item.idade, precos),
      };

      return registro;
    });
  }

  calcularTotal() {
    return this.beneficiarios.map(item => {return item.preco})
      .reduce((resto, soma) => resto + soma, 0);
  }
}
