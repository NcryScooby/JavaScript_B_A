// For Of - estrutura de repetição

// Para arrays todos as estruturas de repetição são iteraveis, mas o for of para objetos não.
// For clássico Geralmente com iteráveis (arrays ou strings)
// For in retorna indice ou chave (strings, arrays, objetos)
// For on retorna valor em si (strings, arrays, iteráveis)


//            01234567
const nome = 'Fabrício';

// Exibe apenas a letra F
console.log(nome[0]);

// Cria um array com nomes
const nomes = ['Fabrício', 'João', 'Maria'];

// Exibe os nomes com o for básico e obtem o indice
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log('\n');


// Exibe os nomes com o for in e obtem o indice
for (let indice in nomes) {
    console.log(nomes[indice]);
}

console.log('\n');

// Exibe os nomes com o for of sem obter o indice
for (let valor of nomes) {
    console.log(valor);
}

console.log('\n');

// Exibe com o for each os nomes, o indice, e o array completo
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});

// Cria um objeto pessoa com nome, sobrenome e idade
const pessoa = {
    nome: 'Fabrício',
    sobrenome: 'Caldana',
    idade: 21,
}

// For in funciona com objetos
for (let atributo in pessoa) {
    console.log(atributo, pessoa[atributo]);
}

// For of funciona não funciona com objetos porque não é iterável
// for (let valor of pessoa) { 
//     console.log(valor);
// }
