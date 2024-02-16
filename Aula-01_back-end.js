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





function calcularIMC(altura, peso) {
  // Calcula o IMC
  const imc = peso / (altura * altura);

  // Retorna a condição
  switch (true) {
    case imc < 18.5:
      return "Baixo peso";
    case imc >= 18.5 && imc < 25:
      return "Peso normal";
    case imc >= 25 && imc < 30:
      return "Acima do peso";
    case imc >= 30:
      return "Obesidade";
  }
}
