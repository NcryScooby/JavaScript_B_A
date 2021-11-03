// Filter, filtrando o array
// Filter sempre vai retornar um array com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// for (let maiores in numeros) {
//     if (numeros[maiores] > 10) {
//         console.log(numeros[maiores]);
//     }
// }

//////////////////////////////////

// function callbackFilter(valor){
//     return valor > 10;
// }

// const numerosFiltrados = numeros.filter(callbackFilter);
// console.log(numerosFiltrados);

//////////////////////////////////

// filtra os numeros maiores que 10
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

//////////////////////////////////

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10;
// });

// console.log(numerosFiltrados);

/////////////////////////////////// 

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome terminar com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 65 },
    { nome: 'Wallace', idade: 47 },
];

const nomesFiltradosLetras = pessoas.filter(pessoa => pessoa.nome.length > 5);
console.log('Nomes com 5 letras ou mais: ', nomesFiltradosLetras);
console.log('-------------------------------------');

const nomesFiltradosIdade = pessoas.filter(pessoa => pessoa.idade > 50);
console.log('Idades maiores que 50 anos: ', nomesFiltradosIdade);
console.log('-------------------------------------');

const nomesTerminadosComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));
console.log('Nomes que terminam com a letra A: ', nomesTerminadosComA);