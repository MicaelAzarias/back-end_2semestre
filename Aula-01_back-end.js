const peso = prompt("Digite seu peso: ");
const altura = prompt("Digite sua altura: ");


function myFunction(peso, altura) {
    const IMC = peso/altura**2
    return IMC;

    if(IMC < 18,5) {
        retorna = `seu imc é:${IMC} e voce esta Baixo peso`
    }
    else {
        return " quase"
    }
    
};


console.log(myFunction(peso, altura)); 
