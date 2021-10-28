// Break e Continue, funcionam em todos os laços

// continue - pula para a próxima iteração
// break - encerra o laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Faz um for of que percorre todos os itens do array
for (let numero of numeros) {

    // checa se o número é 2, caso seja 2 pula o valor
    if (numero === 2){
        console.log('Pulei o número 2');
        // pula o valor
        continue;
    }

    console.log(numero);

    // checa se o número é 5, caso seja 5 encerra o loop
    if (numero === 5){
        console.log('5 encontrado, encerrando loop')
        // para o laço
        break;
    }
}