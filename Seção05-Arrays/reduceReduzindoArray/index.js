// Reduce, reduzindo o array
// Se você tem que alterar todos ou alguns, usa map.
// Se você precisa filtrar, usa filter.
// Se você precisa reduzir a 1 elemento só, usa reduce.


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// checa todos os números do array e retorna apenas os pares
const total = numeros.reduce((acumulador, valor)  => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

console.log(total);


// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 65},
    { nome: 'Wallace', idade: 47},
];

const maisVelho = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelho);