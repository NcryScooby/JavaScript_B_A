// Funções de callback -> funções que são executadas quando determinado evento acontece


// Função que geral um número aleatório entre 1 e 3 segundos e arredodando para inteiro
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function(){
        console.log("F1");
        if (callback) callback();
    }, rand()); // Tempo para executar a função
}

function f2(callback) {
    setTimeout(function(){
        console.log("F2");
        if (callback) callback();
    }, rand()); // Tempo para executar a função
}

function f3(callback) {
    setTimeout(function(){
        console.log("F3");
        if (callback) callback();
    }, rand()); // Tempo para executar a função
}

// Executa tudo em ordem por causa do callback
// f1(function () {
//     f2(function () {
//         f3 (function () {
//             console.log("Olá mundo!");
//         });
//     });
// });


// Mesma coisa só que de maneira organizada
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log("Olá mundo!");
}