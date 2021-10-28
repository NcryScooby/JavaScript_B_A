// For in - Estrutura de repetição -> For in le os arrays ou objeto

// Cria um array com frutas
//                 0        1       2        3
const frutas = ['Banana', 'Maçã', 'Uva', 'Melancia'];

// Percorre o array com o for e exibe cada indice do array
// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }


// Percorre o array com o for in e exibe cada indice do array
for (let indice in frutas){
    console.log(frutas[indice]);
}

// Pula uma linha no console
console.log('\n');

// Cria um objeto pessoa com atributos nome, sobrenome e idade
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
};

// Cria um for que percorre todo objeto pessoa
for (let i in pessoa){
    console.log(i, pessoa[i]);
}

// Pula uma linha no console
console.log('\n');

// Exibe os dois da mesma forma
console.log(pessoa.nome);
console.log(pessoa['nome']);