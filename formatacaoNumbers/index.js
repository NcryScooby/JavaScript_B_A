let num1 = 1; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2); // num1 vira string apenas nessa linha
console.log(typeof num1);
num1 = num1.toString() //num1 vira string em todo o código
console.log(typeof num1);

//representação binária

let n1 = 3;

n1 = n1.toString(2);

console.log(n1);

//formatação de números grandes

let format = 48.298938293;

console.log(format.toFixed(2));

//verificar se o número é inteiro ou não

let inteiro = 10.8;

console.log(Number.isInteger(inteiro));

//verifica se a conta é um NaN

let temp = n1 * 'Olá mundo';

console.log(Number.isNaN(temp));