const btn1 = document.querySelector('button')
// pega a lista de filmes
const listaFilmes = document.querySelector('#listaFilmes')
//criar o elemento li
const itemLista = document.createElement('li')
const textoUsuario = document.querySelector('#filmeInput')

btn1.addEventListener('click',()=>{ 
    // adicionan um 'li' a lista 
    listaFilmes.append(itemLista)
    // add o texto na lista
    itemLista.innerHTML=textoUsuario.value
    // add uma classe 
    itemLista.classList.toggle(active)
    // muda o css
    itemLista.style.backgroundColor = 'red'
})