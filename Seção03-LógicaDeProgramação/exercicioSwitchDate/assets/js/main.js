const h1 = document.querySelector("#data");
const data = new Date();
function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      break;
    case 1:
      diaSemanaTexto = "Segunda-Feira";
      break;
    case 2:
      diaSemanaTexto = "Terça-Feira";
      break;
    case 3:
      diaSemanaTexto = "Quarta-Feira";
      break;
    case 4:
      diaSemanaTexto = "Quinta-Feira";
      break;
    case 5:
      diaSemanaTexto = "Sexta-Feira";
      break;
    case 6:
      diaSemanaTexto = "Sábado";
      break;
    default:
      diaSemanaTexto = "Dia inválido";
      break;
  }
  return diaSemanaTexto;
}
const mesDoAno = new Date();
function getMesAnoTexto(mesDoAno) {
  let mesAnoTexto;
  switch (mesDoAno) {
    case 0:
      mesAnoTexto = "Janeiro";
      break;
    case 1:
      mesAnoTexto = "Fevereiro";
      break;
    case 2:
      mesAnoTexto = "Março";
      break;
    case 3:
      mesAnoTexto = "Abril";
      break;
    case 4:
      mesAnoTexto = "Maio";
      break;
    case 5:
      mesAnoTexto = "Junho";
      break;
    case 6:
      mesAnoTexto = "Julho";
      break;
    case 7:
      mesAnoTexto = "Agosto";
      break;
    case 8:
      mesAnoTexto = "Setembro";
      break;
    case 9:
      mesAnoTexto = "Outubro";
      break;
    case 10:
      mesAnoTexto = "Novembro";
      break;
    default:
      mesAnoTexto = "Mês inválido";
      break;
  }
  return mesAnoTexto;
}

h1.innerHTML = `${getDiaSemanaTexto(data.getDay())}, ${data.getDate()} de ${getMesAnoTexto(mesDoAno.getMonth())} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;