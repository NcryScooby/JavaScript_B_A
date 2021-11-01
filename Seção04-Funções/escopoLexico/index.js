// Isso é escopo léxico, ele busca a variável nos vizinhos, fora da função

const nome = 'Fabrício'

function falaNome(){
    console.log(nome);
}

falaNome();

////////////////

function usaFalaNome() {
    falaNome();
}

usaFalaNome();