// While e do While -> Estrutura de repetição, While se usa quando a gete não sabe quando ela vai terminar

// A variável é criada fora do while, diferente do for
let i = 1;

// Diz que se i é menor ou igual a 10, faça:
while (i <= 10) {
    console.log(i);
    // Adiciona 1 a i, se não tiver o i++, o i vai ser ser executado para sempre
    i++;
}

// Faz uma função que gera números aleatórios entre 0 e 10
function random (min, max) {
    const r = Math.random() * (max - min) + min;
    // Arredondo para números inteiros
    return Math.floor(r);
}

// Recebe por argumento min e max
let rand = random(1, 10);
console.log(rand);

// Ele vai executar o código enquanto a condição for verdadeira, quando for 5 ele para
while (rand !== 5) {
    rand = random(1, 10);
    console.log(rand);
}

console.log('\n');

// Faça Enquanto, sempre executa pelo menos uma vez o código para depois checar a condição
do {
    rand = random(1, 10);
    console.log(rand);
} while (rand !== 5);