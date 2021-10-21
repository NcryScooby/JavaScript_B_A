/*
Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - Array, Object, function - Passador por referência
*/


//          01234567
let nome = 'Fabrício'
//Tentei alterar o índice 0 da string
nome[0] = 'R';

//não altera pois é imutável
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia A não depende de B e vice-versa, a não ser a primeira vez para pegar o valor

console.log(a, b);

// altera a variável A e não afeta o valor de B
a = 'Outra coisa';
console.log(a, b);


// A quanto B apontam para o mesmo valor na memória
let array = [1, 2, 3];
let arrayB = array;
//let arrayB = [...array]; -> O valor de A foi copiado para o valor de B e B virou totalmente independente

console.log(array, arrayB);

// Adiciona um número a mais no array afetando tanto A quanto a B
array.push(4);

console.log(array, arrayB);

// Remove um número do array alterando os dois dados
arrayB.pop();

console.log(array, arrayB);

// Cria um objeto pessoa
const pessoa = {
    nome: 'Fabrício',
    sobrenome: 'Caldana'
};

// atribui o valor do objeto A para o B
const pessoa2 = pessoa;
// const pessoa2 = {...pessoa}; -> Torna B totalmente independente de A

// Altera o nome do objeto A, consequentemente alterar o valor de B
pessoa.nome = 'João';
console.log(pessoa2);