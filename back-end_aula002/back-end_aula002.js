
function dados() {
    let livro = prompt('qual livreo voce quer? ');
    return livro
}

function calcular(livro) { 

    if (livro >= 7) {
        valor = livro * 15,0
        console.log(valor)
    } 
    else if (livro <= 7) {
        valor = livro * 22,0
        console.log(valor)
    }
    else {}
}

function main(){
    let qLivro = dados()
    let qValor = calcular(qLivro)
    console.log(qValor)
}
main()