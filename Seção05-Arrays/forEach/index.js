// For Each, está apenas dentro de arrays

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];

a1.forEach(function(valor, indice) {
    console.log(`${indice} - ${valor}`);
});

console.log('-----------------------------');

const a2 = [10, 20, 30];
let total = 0;

a2.forEach(valor => {
    total += valor;
});

console.log(total);