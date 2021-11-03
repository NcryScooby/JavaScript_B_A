// Método Splice


// Exercício 1    -5         -4      -3       -2      -1
//                 0          1       2        3       4
const nomes = ['Fabrício', 'João', 'Lucas', 'José', 'Júlia'];

// nomes.splice(indice atual, delete, elem1, elem2, elem3);
const removidos = nomes.splice(1, Number.MAX_VALUE);
console.log(nomes, removidos);


const nomes2 = ['Fabrício', 'João', 'Lucas', 'José', 'Júlia'];
// Adiciona Maria no indice 3 no lugar de josé
const adicionados = nomes2.splice(3, 1, 'Maria');
console.log(nomes2, adicionados);

// push - adiciona elementos no final do array
// const adicionados = nomes.splice(nomes.length, 5, 'Maria');

// unshift - adiciona elementos no início do array
// const adicionados = nomes.splice(0, 0, 'Maria');

// pop - remove o ultimo elemento do array
// const removidos = nomes.splice(-1, 1); 

// shift - remove o primeiro elemento do array
// const removidos = nomes.splice(0, 1);