// Diferenças entre var e let

// Declara uma variável com o nome Fabrício
let nome = 'Fabrício'; // Criando
// Declara uma variável com o nome Fabrício
var nome2 = 'Fabrício';

//let nome = 'João'; // Erro: redeclarando variável
var nome2 = 'João'; // Redeclarando variável
var nome2 = 'Maria'; // Redeclarando variável

// Exibe o valor da variável nom2 e nome2
console.log(nome, nome2);


// Declara uma constante true
const verdadeiro = true;

if (verdadeiro) {
    // Declara uma variável com o nome José dentro do escopo do if
    let nome = 'José'; // Criando
    var nome2 = 'João'; // redeclarando variável
    // Exibe o valor da variável nome e nome2
    console.log(nome, nome2); // Busca a variável dentro do escopo do if

    if (verdadeiro) {
        // Declara uma variável com o nome Maria dentro do escopo do if
        let nome = 'Maria'; // Criando
        var nome2 = 'Mario'; // redeclarando variável
        // Exibe o valor da variável nome e nome2
        console.log(nome, nome2); // Busca a variável dentro do escopo do if
    }

}

// Let tem escopo de bloco - Escopo = {}, ou seja, só será lida se estiver dentro de um bloco
// Var só tem escopo de função

// Exibe o valor da variável nome e nome2
console.log(nome, nome2); // Ele busca a let que foi declarada no escopo global e o var que foi declarado por último

// Cria função
function falaOi(){
    var nome = 'Luiz';
}

// Erro ao tentar acessar a variável nome
console.log(nome);

// Executa a função
falaOi();

// Cria variável sobrenome
var sobrenome = 'Caldana'

// Cria função 2
function falaOi2(){
    // Exibe o valor da variável sobrenome dentro da função do escopo global
    console.log(sobrenome);
}

// Executa a função
falaOi2();

// Usando a variável antes de declarar valor a ela, resultado undefined
console.log(nomeQualquer); // Erro: variável não declarada

var nomeQualquer = 'Fabrício'; // Criando variável, eleva ao topo do arquivo o tipo var


// console.log(nomeQualquer2); // Erro: variável não declarada

// let nomeQualquer2 = 'Fabrício'; // Criando variável, porém acontece um erro, pois a variável nomeQualquer2 não foi declarada antes da exibição dela