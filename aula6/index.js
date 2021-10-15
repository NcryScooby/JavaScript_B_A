// NÃO UTILIZE VAR, UTILIZE LET!

let nome = 'Fabrício'; // String

console.log(nome, 'Nasceu em 2000');
console.log(nome, 'Conheceu Bianca em 2016');
console.log(nome, 'Namora Bianca desde 2016');

let nome2; // Apenas declarou
nome2 = 'Qualquer valor'; // Inicializando a variável
console.log(nome2);

nome2 = 'Outro valor';
console.log(nome2);

//  Não podemos criar variáveis com palavras reservadas
//  let let;

//  Variáveis precisam ter nomes significativos
//  errado -> let n = 'Fabrício';

//  let nomeCliente = 'João';
//  console.log(nomeCliente);

//  Não pode começar o nome de uma variável com um número
//  Sempre iniciando com letra minúscula
//  let 1nome;

//  Não pode conter espaços ou traços
//  let nome-Cliente;

//  Utilizamos camelCase
let nomeCompletoDoCliente = 'Fabrício Caldana';
console.log(nomeCompletoDoCliente);

//  Case-Sensitive
let nomeCliente = 'Fabrício';
//  São variáveis diferentes 
let nomecliente = 'João';

console.log(nomeCliente, nomecliente);

//  Não podemos redeclarar variáveis com let

//  let nomeSeiLa = 'Fabrício';
//  let nomeSeiLa = 'João';