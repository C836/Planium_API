export function getPrices(plano, plans, prices){
    console.log(plano)
    let selecionado = plans.find(obj => {
        return obj.registro === plano
    })

    let precos = prices.find(obj => {
        return obj.codigo === selecionado.codigo
    })

    return precos
}