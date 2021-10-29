// Paramêtros da Função
// Argumentos que sustenta todos os argumentos enviados
//       parâmetro ()
function funcao(a, b, c) {
    let total = 0;

    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c);
}
//    Argumentos
funcao(1, 2, 3);

/////////

// function funcao(a, b, c, ...d){
    
//     console.log(a, b, c, d);
// }
// //    Argumentos
// funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);

function funcao2 (a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}

funcao2(1, 2, 3);

/////////

function soma (a, b){
    // B tem valor? se tem B é B, senão B é 0
    b = b || 0;
    console.log(a + b);
}

soma(2);

/////////

// B tem valor? se tem B é B, senão B é 2
function soma2 (a, b = 2){
    console.log(a + b);
}

soma2(2);

/////////

function soma3 (a, b = 2, c = 4){
    console.log(a + b + c);
}

soma3(2, undefined, 20);

/////////

function array ([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}


array(['Fabrício', 'Caldana', 21]);

/////////

//                                    ...rest operator sempre deve ser o último parâmetro, pois ele pega o resto 
const conta = function(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;  
    }

    console.log(acumulador);
};

conta('+', 1, 20, 30, 40, 50);