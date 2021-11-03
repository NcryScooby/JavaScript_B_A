// Concatenando arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// const array3 = a1 + a2; // Erro

// Concatena array1 com array2 e adiciona mais alguns itens
const array3 = array1.concat(array2, [7, 8, 9], 'Fabrício'); 

console.log(array3);

// ... rest -> pegando o resto
// .. spread -> espalhando os itens

const a3 = [...array1, 'Fabrício', ...array2, ...[7, 8, 9]];
console.log(a3);