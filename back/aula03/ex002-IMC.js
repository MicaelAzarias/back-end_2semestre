const prompt = require('prompt-sync')()

function getUserInfo(){
    let altura = Number(prompt('digite sua altura: '))
    let peso = Number(prompt('digite seu peso: '))

    return {
        pesoInformado: peso,
        AlturaInformada: altura
    }
}

function calcImc(alturaDoUsuario, pesoDoUsuario){
    return pesoDoUsuario / alturaDoUsuario**2
}
function main(){
    let peso = getUserInfo().pesoInformado
    let altura = getUserInfo().AlturaInformada
    let imc = calcImc(altura, peso)
    console.log(`seu IMC é ${imc}`)
}
main()