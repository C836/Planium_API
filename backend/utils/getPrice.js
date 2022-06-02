export function getPrice(quant, plano, plans, prices) {
  let selecionado = plans.find((obj) => {
    return obj.registro === plano;
  });

  return prices.reverse().filter((item) => {
    return item.codigo === selecionado.codigo && quant >= item.minimo_vidas
  })[0]
}
