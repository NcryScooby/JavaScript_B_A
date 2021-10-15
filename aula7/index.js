//  Não podemos criar constantes com palavras reservadas
//  constantes precisam ter nomes significativos
//  Não pode começar o nome de uma constantes com um número
//  Sempre iniciando com letra minúscula
//  Não pode conter espaços ou traços
//  Não podemos modificar o valor de uma constante
//  Não utilize var, utilize const


//  Errado -> Constantes precisam ser inicializadas  -> Não podem ser alteradas depois de declaradas
//  const nome;
//  const nome = 'João'
//  nome = 'Fabrício'


const nome = 'Fabrício';
console.log(nome);

let nome2 = nome;
console.log(nome2);

nome2 = 'João';
console.log(nome2);

///////////////

const primeiroNumero = 5; //Number

console.log(typeof primeiroNumero);

const segundoNumero = 5;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

console.log('O resultado é', resultado);
console.log('O resultado é', resultadoDuplicado);
