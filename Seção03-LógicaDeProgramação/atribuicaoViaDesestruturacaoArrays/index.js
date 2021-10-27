// Atribuição via desestruturação por Arrays

// ... rest, ... spread

// Atribui as variáveis
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

// Atribui para cada indice do array 'B', 'C' e 'A'
// ['B', 'C', 'A'] = desestruturação

const letras = ['B', 'C', 'A'];
[a, b, c] = letras;

// Exibe o valor das variáveis
console.log(a, b, c);

//               0  1  2  3  4  5  6  7  8
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// Atribui para primerio e segundo indice do array '10', '20' e '30'
const [um, dois, tres, ...resto] = numeros;

// Exibe o valor das variáveis
console.log(um, dois, tres);

// Exibe o resto do array -> rest
console.log(resto);

// Pula o 2, o 4 e o 6
const [um1, , tres3, , cinco5, , sete7]= numeros;

// Exibe o valor das variáveis
console.log(um1, tres3, cinco5, sete7);


// Array dentro de um array
//                  0          1          2
//               0  1  2    0  1  2    0  1  2
const lista = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// Exibe o número 6 dentro do indice do array 1 e do indice do array 2
console.log(lista[1][2]);

// Exibe o número 6 pulando os outros
const separando = [, [, , seis]] = lista;
console.log(seis);

// Atribui para cada indice do array '1', '2' e '3'
const [lista1, lista2, lista3] = lista;

// Exibe o número 9 dentro do indice do array 2
console.log(lista3[2]);