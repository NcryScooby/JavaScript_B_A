/*
&& -> Todas as expressões precisam ser verdadeiras
|| -> Apenas uma precisa ser verdaira para retornar true
*/

/*
FALSY
false
0
'' "" ``
null / undefined
NaN
*/

// Como tem uma expressão Falsy, retorna uma string vazia
console.log('Fabrício' && '' && 'Maria');

// faz uma função retornando uma string oi
function falaOi(){
    return 'Oi';
}

//testa se a condição é true ou false
const vaiExecutar = 'Joãozinho';

//se for true executa oi, senão executa false
console.log(vaiExecutar && falaOi());


// Imprime o primeiro valor verdadeiro, como fabrício não é falsy retorna Fabrício.
console.log(0 || false || null || 'Fabrício' || true);

// Imprime a primeira condição, pois ela é true.
const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);