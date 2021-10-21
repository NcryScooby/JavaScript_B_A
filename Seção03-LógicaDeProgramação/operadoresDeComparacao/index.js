/*
Operadores de comparação
> ~ Maior que
>= ~ Maior ou igual
< ~ Menor
<= ~ Menor ou igual
== ~ Igualdade (checa apenas valor) // Não é recomendado usar esse aqui
=== ~ Igualdade estrita (checa valor e tipo)
!= ~ Diferente (checa apenas valor) // Não é recomendado usar esse aqui
!== ~ Diferente estrita (checa valor e tipo)
*/

// Faz a comparação se 10 é maior que 5 e retorna true ou false
console.log(10 > 5);

// Faz a comparação se 10 é maior ou igual a 10 e retorna true ou false
console.log(10 >= 10);

// Faz a comparação se 10 é menor que 11 e retorna true ou false
console.log(10 < 11);

// Faz a comparação se 12 é menor ou igual a 11 e retorna true ou false
console.log(12 <= 11);

// Faz a comparação se 10 é menor que 11 e retorna true ou false
const num1 = 10;
const num2 = 11;
const resultado = num1 < num2;

console.log(resultado);

// Faz a comparação se 10 é igual a 10 e retorna true ou false mesmo sendo outro tipo, o operador === compara os dois, tipo e valor.
const n1 = 10; // number
const n2 = '10'; // String
const res = n1 == n2;

console.log(res);

// Faz a comparação se 10 é diferente de 10 e retorna true ou false mesmo sendo outro tipo, o operador !== compara os dois, tipo e valor.
const n5 = 10; // number
const n6 = '10'; // String
const res2 = n5 != n6;

console.log(res2);