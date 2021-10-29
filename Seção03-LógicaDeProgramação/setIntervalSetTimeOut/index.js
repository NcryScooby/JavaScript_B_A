// Set Interval e set TimeOut

 // Faz uma função que retorna o horário atual
function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}


// Faz uma função que retorna o horário atual em um intervalo de tempo
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);


// Faz uma função que retorna o horário atual em um intervalo de tempo e depois o encerra o intervalo
setTimeout(function () {
    clearInterval(timer);
}, 10000);


