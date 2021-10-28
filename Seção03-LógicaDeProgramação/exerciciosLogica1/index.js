// Faça uma função que recebe 2 números e retorna o maior deles.

function maiorNumero (num1, num2){
    if (num1 > num2){
        console.log(`${num1} É maior que ${num2}`);
    } else {
        console.log(`${num2} É maior que ${num1}`)
    }
}

maiorNumero(999, 105);

// Maneira mais fácil de fazer, com arrow function e retornando os valores em ternário


const max = (x, y) => x > y ? x : y;

console.log(max(500, 800));