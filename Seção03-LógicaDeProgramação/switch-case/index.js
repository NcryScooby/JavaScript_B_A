// Declara a constante data com a data atual
const data = new Date('1987-04-25 00:00:00');

// Declara a constante dia com o dia da semana atual
const diaSemana = data.getDay();

// Exibe o dia da semana atual
console.log(diaSemana);

// Declara a variável
let diaSemanaTexto;

// Declara o switch com o que deve ser checado
switch (diaSemana) {
    // Caso o dia da semana seja igual a 0 salva na variável diaSemanaTexto a palavra domingo
    case 0: 
        diaSemanaTexto = 'Domingo'; 
    break; // encerra o switch caso o valor seja encontrado;

    case 1:
        diaSemanaTexto = 'Segunda';
    break;

    case 2:
        diaSemanaTexto = 'Terça';
    break;

    case 3:
        diaSemanaTexto = 'Quarta';
    break;

    case 4:
        diaSemanaTexto = 'Quinta';
    break;

    case 5:
        diaSemanaTexto = 'Sexta';
    break;

    case 6:
        diaSemanaTexto = 'Sábado';
    break;

    // Caso nenhuma for encontrada, entra no default
    default:
        diaSemanaTexto = 'Dia inválido';
    break;
}

// Exibe no console a string formatada
console.log(diaSemanaTexto);


// Pega o valor número do dia e transforma em string com o seu valor real
/*if (diaSemana === 0){
    diaSemanaTexto = 'Domingo';
} else if(diaSemana === 1){
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça-Feira';
} else if(diaSemana === 3){
    diaSemanaTexto = 'Quarta-Feira';
} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta-Feira';
} else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta-Feira';
} else if (diaSemana === 6)
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = 'Dia inválido';   
}*/