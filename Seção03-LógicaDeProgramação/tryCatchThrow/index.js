// Tratando e lançando erros com try, catch e throw


// Try = tente executar, se der erro, execute o catch
try {
    console.log(naoExisto); // Erro, variável não existe
} catch (err) {
    console.log('naoExisto não existe');
}

console.log('################');

// Cria uma função de soma, se a e b forem diferentes de número, executa o erro.
function soma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error ('Os valores precisam ser números');
    } return a + b;
}

// tenta executar os comandos, caso de erro entra em catch e executa o erro
try {
    console.log(soma(3, 5));
    console.log(soma(3, '7'));
} catch (error) {
    console.log(error.message);
}