// Closures

// Escopo Global
function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

// Closure é a habilidade que a função tem de acessar o escopo léxico em que foi criada.
const funcao = retornaFuncao('Fabrício');
const funcao2 = retornaFuncao('Caldana');

console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());