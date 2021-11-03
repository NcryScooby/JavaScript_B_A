// Filter, Map e Reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Filter para pegar apenas os pares do array, Map para multiplicar por 2, Reduce para somar todos os números
const numerosPares = numeros
.filter(numero => numero % 2 === 0)
.map(numero => numero * 2)
.reduce((total, numero) => total + numero);



console.log(numerosPares);