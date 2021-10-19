// Cria a função
function saudacao() {
    console.log('Bom dia');
}
 

// Chama a função para ser executada
saudacao();


// Cria a função que recebe um parametro
function receberNome(nome){
    console.log(`Bom dia ${nome}!`);
    // retorna o valor nome para a const variavel
    return nome;
}

// Chama a função para ser executada alterando o parametro nome
receberNome('Fabrício');

// Chama a função para ser executada alterando o parametro nome
receberNome('Luiz');

// Armazena nome em uma constante
const variavel = receberNome('Lucas');

// Exibe na tela a constante
console.log(variavel);

// Cria a função que recebe por parametro nome
function saudacao2(nome){
    // retorna a mensagem + o nome da pessoa
    return `Bom dia ${nome}!`;
}

// Recebe a função em uma constante e muda o nome por parametro
const variavel2 = saudacao2('João');

// Exibe na tela a função + nome recebido por parametro
console.log(variavel2);

// Cria função que soma dois valores
function soma(x, y){
    // atribui x + y em uma constante resultado
    const resultado = x + y;
    // retorna o resultado da soma e encerra a função
    return resultado;
}

// Declara uma constante que recebe a função somando 5 + 5 por parametro
const resultado = soma(5, 5);

// Exibe a constante resultado com os valores da função
console.log(resultado);

// console.log(resultado); Irá acusar erro, pois o que está dentro dela está protegido 

// Exibe na tela a função somando 2 + 2
console.log(soma(2, 2));

// Exibe na tela a função somando 5 + 2
console.log(soma(5, 2));

// Exibe na tela a função somando 5 + 9
console.log(soma(5, 9));

// Cria função que soma dois valores e atribui os valores dentro dos parametros
function soma2(x = 5, y = 1){
    // atribui x + y em uma constante resultado
    const resultado = x + y;
    // retorna o resultado da soma e encerra a função
    return resultado;
}

// Armazena apenas a função sem parametros dentro da constante
const resultado2 = soma2();

// Exibe na tela a constante
console.log(resultado2);

// cria uma constante que recebe uma função -> Obrigatório uso do ; no final
const raiz = function (n) {
    // returna o calculo
    return n ** 0.5;
};

//exibe a constante com a função calculando a raiz quadrada, passando 9 como parametro
console.log(raiz(9));

//exibe a constante com a função calculando a raiz quadrada, passando 16 como parametro
console.log(raiz(16));

//exibe a constante com a função calculando a raiz quadrada, passando 25 como parametro
console.log(raiz(25));

//Arrow Function serve para facilitar a vida do programador, digitando menos código
const raiz2 = n => 
    // returna o calculo
    n ** 0.5;

//exibe a constante com a função calculando a raiz quadrada, passando 25 como parametro
console.log(raiz2(25));