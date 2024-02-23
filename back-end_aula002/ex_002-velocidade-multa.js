function calcularMulta(velocidade) {
    const limiteVelocidade = 60;
    const valorMultaPorKm = 100;

    if (velocidade <= limiteVelocidade) {
        console.log("Dentro do limite de velocidade. Sem multa.");
    } else {
        const kmUltrapassados = velocidade - limiteVelocidade;
        const multa = kmUltrapassados * valorMultaPorKm;
        console.log(`Velocidade acima do limite! Multa de R$${multa.toFixed(2)}.`);
    }
}

// Exemplo de uso:
const velocidadeInformada = 70; // Altere para a velocidade desejada
calcularMulta(velocidadeInformada);
