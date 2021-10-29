// Declaração de função (Function hoisting)
// hoinsting é o processo de elevar uma função para o topo do escopo

falaOi();

function falaOi() {
    console.log('Oi');
}

// First Class objects (objetos de primeira classe)
// Function expression
// Uma constante recebe uma função como dado
const souUmDado = function () {
    console.log('Sou um dado');
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo: ');
    funcao();
}

executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um objeto
// Cria uma função dentro do objeto, ou seja, um método.
const objeto = {
    falar() {
        console.log('Estou falando...');
    }
}

objeto.falar();