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

// Adiciona 3 horas a data atual
const data3 = new Date(0 + tresHoras);

// Exibe no console a data + 3 horas
console.log(data3.toString());