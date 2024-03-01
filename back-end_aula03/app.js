const numeros = ['ola', 10, true, {}];
const [saudacao, numero, booleano, objeto, aluno] = numeros // ele guarda as informações do const numeros, e no de baixo ele deu um nome para cada coisa.

// spread e rest
const [saudacaos, ...resto] = numeros
console.log(numeros)

// aqui serve para eu mudar algo dentro de uma lista que eu criei
numeros[4] = 'Micael'
console.log(numeros)

// serve para ver o tamanho do array
console.log(numeros.length)

