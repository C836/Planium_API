export class registro{
    constructor(registros, plano){
        this.quantidade = registros.length,
        this.plano = plano
        this.beneficiario = this.beneficiarios(registros)
    }

    beneficiarios(registros){
        return registros.map((item)=>{
            return {nome: item.nome, idade: item.idade}
        })
    }
}