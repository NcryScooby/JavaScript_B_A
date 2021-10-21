//  Operadores Aritméticos 
//  + Adição e Concatenação 
//  - Subtração
//  * Multiplicação
//  / Divisão
//  ** Potenciação
//  % Resto da divisão

/*
        Ordem da precedência
        ()
        **
        * / %
        + -
*/


const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log((num1 + num2) * num3);

//  Operador de incremento ++ e decremento --

//let contador = 1;
//contador++;
//contador++;

//console.log(contador);

let contador = 0;

contador += 5; // contador = contador + 5
console.log(contador);
contador += 5;
console.log(contador);
contador += 5;
console.log(contador);

// NaN - Not a Number / parseInt(converte string para Inteiro), parseFloat(converte string para Real), Number

const numero1 = 10;
const numero2 = Number('2.2');

console.log(numero1 + numero2);
console.log(typeof numero2);