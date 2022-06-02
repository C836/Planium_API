export function getPrices(quant, plano, plans, prices) {
    let quantidade = quant > 0 ? quant : 1

    let selecionado = plans.find((obj) => {
      return obj.registro === plano;
    });
  
    return prices.reverse().filter((item) => {
      return item.codigo === selecionado.codigo && item.minimo_vidas <= quantidade
    })[0]
  }
  