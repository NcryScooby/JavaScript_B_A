//TIPOS PRIMITIVOS -> String, Number, undefined, null, boolean, symbol

const nome = 'Fabrício'; // String
const nome1 = "Fabrício"; // String
const nome2 = `Fabrício`; // String

const num = 20; // Number
const num1 = 10.5; // Number

let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // nulo -> não aponta para local nenhum na memória -> Eu quero que seja nulo o valor

const aprovado = true; // Boolean -> true ou false

console.log(typeof nome, nome);

/*const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);

console.log(a, b);*/

let a = 2;
let b = a;

console.log(a, b); //2, 2

a = 3;

console.log(a, b); //3, 2