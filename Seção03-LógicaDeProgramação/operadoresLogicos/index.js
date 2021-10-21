/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/


// Todas as expressão precisam ser verdadeiras, caso uma delas não seja true, retorna false para todas.
const expressaoAnd = true && true && true && true;
console.log(expressaoAnd);


// Não precisa que todas as expressões sejam verdadeiras, basta uma ser verdadeira que ele retorna true.
const expressaoOr = false || true || false || false;
console.log(expressaoOr);


const usuario = 'Fabrício'; // form que o usuário digitou
const senha = '123456'; // form que o usuário digitou

const vaiLogar = usuario === 'Fabrício' && senha === '123456';
console.log(vaiLogar);


// Operador ! -> inverte a situação, o que era false vira true e vice-versa
console.log(!true);