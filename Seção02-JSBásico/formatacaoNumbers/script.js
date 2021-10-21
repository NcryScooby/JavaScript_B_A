// IEEE 754-2008

let num1 = 0.7; // number
let num2 = 0.1; // number

console.log(num1 + num2);

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

console.log(num1);

// JavaScript não arredonda valores

//num1 = num1.toFixed(2);

console.log(num1);

//

num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

// como resolver isso?

let numero1 = 0.7;
let numero2 = 0.1;

numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 0.8
numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 0.9
numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 1.0

console.log(numero1);