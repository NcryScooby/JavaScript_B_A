// Estrutura de repetição For - Clássico

// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// Cria uma estrutura de repetição com um laço for que inicia em 0 e vai até 5.
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

// Cria uma estrutura de repetição com um laço for que inicia em 400 e vai até 500, pulando 10 em 10.
for (let i = 400; i <= 500; i += 10) {
    console.log(`Linha ${i}`);
}

// Cria uma estrutura de repetição com um laço for que inicia em 500 e vai descento até 400, pulando 10 em 10.
for (let i = 500; i >= 400; i-= 10) {
    console.log(`Linha ${i}`);
}

// Cria uma estrutura de repetição com um laço for que inicia em 0 e vai até 10, verificando se os números são par ou ímpar.
for (let i = 0; i < 10; i++) {
    par = i % 2 === 0 ? 'Par' : 'Ímpar';
    console.log(i, par);
}

//                 0        1       2         3         
const frutas = ['Banana', 'Maçã', 'Uva', 'Melancia'];

// Exibe o tamanho do array
console.log(frutas.length);

// Cria um for que vai de 0 até o tamanho do array, mostrando o nome de cada item do array.
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}