let num1 = 9.54578;
let num2 = Math.floor(num1); // arredonda o valor para baixo
console.log(num2);

//

let numero1 = 9.54578;
let numero2 = Math.ceil(numero1); // arredonda o valor para cima
console.log(numero2);

//

let n3 = 9.49;
let n4 = Math.round(n3); // arredonda para o mais próximo
console.log(n4)

//

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, -1, -3, -50)); // pega o maior número da sequencia

console.log(Math.min(1, 2, 3, 4, 5, 6, 7, -1, -3, -50)); // pega o menor número da sequencia


// pega um número aleatório
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

// valor de pi
console.log(Math.PI);

// potenciação
console.log(Math.pow(2, 10)); // com math
console.log(2 ** 10); // sem math

// raiz quadrada
let raizQuadrada = 9;
console.log(raizQuadrada ** (1/2));
console.log(raizQuadrada ** 0.5);