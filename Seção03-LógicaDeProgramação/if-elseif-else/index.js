/*
Entre 0 - 11 / Bom dia
Entre 12 - 17 / Boa tarde
Entre 18 - 23 / Boa noite
*/

// if pode ser usado sozinho
// sempre que utilizo a palavra else, preciso ter um if
// eu posso ter vários else ifs na checagem
// só posso ter um else na chacagem
// podemos usar condições sem o else if, utilizando apenas if e else

//Cria uma constante que armazena um horário
const hora = 18;

// se hora for menor ou igual a 12 execute isso
if (hora >= 0 && hora <= 11){
    console.log('Bom Dia!');
} 
// senão execute
else if (hora >= 12 && hora <= 17){
    console.log('Boa Tarde!');
}
// senão execute 
else if (hora >= 18 && hora <= 23){
    console.log('Boa Noite!');
} 
// se nenhuma delas for atentida, executa
else {
    console.log('Horário Inválido');
}

// cria uma constante onde diz que o valor é true
const tenhoGrana = true;

// faz uma condição avaliando se é true ou false
if (tenhoGrana){
    console.log('Vou sair de Casa');
} else {
    console.log('Não vou sair de casa');
}