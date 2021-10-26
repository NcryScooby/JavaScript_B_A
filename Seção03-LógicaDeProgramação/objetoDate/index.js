// New = Função construtora -> Ela sempre começa com a primeira letra Maiúscula
// Recebe a data atual na constante data;
const data = new Date();

// Exibe ela no console formatada para string
console.log(data.toString());

const data2 = new Date(0); // 01/01/1970 - Timestamp unix ou época unix 


// Vai exibir 1969 21:00 por causa do GMT-0300, ou seja 3 horas a menos
console.log(data2.toString()); 

// segundos, minutos, horas, milisegundos
const tresHoras = 60 * 60 * 3 * 1000;

// adiciona + 1 dia na constante
const umDia = 60 * 60 * 24 * 1000;

// Adiciona 3 horas + 1 dia a data atual
const data3 = new Date(0 + tresHoras + umDia);

// Exibe no console a data + 3 horas
console.log(data3.toString());

// Representaria 20 de abril de 2019 as 15:30:00
const dataTotal = new Date(2019, 3, 20, 15, 30, 0, 0);

// Exibe a data 20 de abril de 2019 as 15:30:00
console.log(dataTotal.toString());

// milisegundos vão até 999, 1000 milisegundos significando 1 segundo
// segundos vão até 59, 60 segundos significa 1 minuto
// os meses começam em 0, 0 significa janeiro, vai até 11 - dezembro
// a, m, d, h, M, s, ms

// seta a data por string
const dataString = new Date('2019-04-20 20:20:59');

// Obtém a data inteira
console.log(dataString.toString());

// Obtém o dia
console.log('Dia', dataString.getDate());

// Obtém o mês (começa em 0) + 1 para exibir o mês correto
console.log('Mês', dataString.getMonth() + 1);

// Obtém o ano
console.log('Ano', dataString.getFullYear());

// Obtém a hora
console.log('Hora', dataString.getHours());

// Obtém os minutos
console.log('Minutos', dataString.getMinutes());

// Obtém os segundos
console.log('Segundos', dataString.getSeconds());

// Obtém os milissegundos
console.log('Milissegundos', dataString.getMilliseconds());

// Obtém o dia da semana - 0 para domingo, 6 para sábado
console.log('Dia da semana', dataString.getDay());

// Do Marco zero até hoje contado em milissegundos
console.log(Date.now());

function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function formataData(data) {
     const dia = zeroAEsquerda(data.getDate());
     const mes = zeroAEsquerda(data.getMonth() + 1);
     const ano = zeroAEsquerda(data.getFullYear());
     const hora = zeroAEsquerda(data.getHours());
     const minutos = zeroAEsquerda(data.getMinutes());
     const segundos = zeroAEsquerda(data.getSeconds());

     return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const dataFormatada = new Date();
const dataBrasil = formataData(dataFormatada);
console.log(dataBrasil);