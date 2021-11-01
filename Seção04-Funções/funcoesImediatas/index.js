// Funções imediatas
// IIFE - Immediately Invoked Function Expression


// Toca o escopo global
// function qualquerCoisa() {
//     console.log('Executando...');
// }

// qualquerCoisa();

// Cria uma função e executa imediatamente sem tocar no escopo global
(function() {
    const nome = 'Fabrício';

    console.log(nome);
})(); // Executa logo após a função ser criada

// Declara uma variável global
// const nome = 'João'


// Protege do escopo global
(function (idade, peso, altura) {

    const sobrenome = 'Caldana';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    
    function falaNome() {
        console.log(criaNome('Fabrício'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(21, 92, 1.75);