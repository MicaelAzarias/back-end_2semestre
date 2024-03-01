const listaFilmes = document.querySelector('#listaFilmes')
// const filmeInput = document.querySelector('#filmeInput').value // serve para pegar o que o usuario digita para add no array
// const btn1 = document.querySelector('button')
// const filmes = ['Corra', 'Gato de botas', 'Shrek', 'Elementos', 'MIB']

// isso é um objeto
const filmes = [{ 
    nome: 'Harry Potter',
    lancamento: 2001,
    genero: 'fantasia',
    atores: {
        ator1: 'Daniel RadCliff' // da para te rum objeto dentro de outro objeto 
    }
}, {
    nome: 'Vovozona',
    lancamento: 2000,
    genero: 'comedia'
}]

// filmes.push('As branquelas') // serv para add algo na lisata
// filmes.pop() // remove o ultimo item do array

// btn1.addEventListener('click', ()=>{
//     let filmeDigitado = filmeInput.value
//     filmes.push(filmeDigitado)
// })

// window.onload = function carregarFilmes(){

// } 
// este de cima é a mesma coisa que o de baixo, so que embaixo fica mais facil de escrever

// window.onload = ()=>{
//     // 1(let i=0;); contar qunatas vezes passa no loop // 2(i < filmes.length;); contar quantas vezes ele vai passar no loop, condição// 3(i++); adiciona 1, para ele parar de fazer o loop   
//     for(let i=0; i < filmes.length; i++){
//         let itemLista = document.createElement('li') // cria o elemento
//         listaFilmes.append(itemLista) //add um elemento html
//         itemLista.innerHTML = filmes[i] // colocar o conteudo na lista
//     }
// }


window.onload = ()=>{
    // 1(let i=0;); contar qunatas vezes passa no loop // 2(i < filmes.length;); contar quantas vezes ele vai passar no loop, condição// 3(i++); adiciona 1, para ele parar de fazer o loop   
    for(let i=0; i < filmes.length; i++){
        let itemLista = document.createElement('li') // cria o elemento
        listaFilmes.append(itemLista) //add um elemento html
        itemLista.innerHTML = filmes[i].nome // colocar o conteudo na lista

        let anoLancamento = document.createElement('spam')
        itemLista.append(anoLancamento)
        anoLancamento.innerHTML = filmes[i].lancamento
    }
}

filmes.forEach(function(meuElemento){
    console.log(meuElemento.nome + 'eitaaa')
})

filmes.filter(meuElemento) // para filtarar 