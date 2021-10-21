// declara uma constante com o valor do número
const numero = 10;

// faz um if totalmente independente do outro.
if (numero <= 10){
    console.log('O número é menor ou igual a 10');
}

// se numero for maior ou igual a zero e menor ou igual a 5 executa
if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} 
// senão
else if (numero >= 6 && numero <= 8){
    console.log('O número está entre 6 e 8.');
}
// senão
else if (numero >= 9 && numero <= 11){
    console.log('O número está entre 9 e 11.');
} 
// se as outras não forem atendidas, executa essa
else {
    console.log('O número não está entre 0 e 11.');
} 