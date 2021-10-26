const h1 = document.querySelector("#data");
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
    const diasDaSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    return diasDaSemana[diaSemana];
}

function getMesAnoTexto(mesDoAno) {
    const mesesDoAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return mesesDoAno[mesDoAno];
}

function zeroAEsquerda(numero) {
  return numero >= 10 ? numero : `0${numero}`;
}

h1.innerHTML = `${getDiaSemanaTexto(data.getDay())}, ${data.getDate()} de ${getMesAnoTexto(data.getMonth())} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;