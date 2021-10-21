let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let auxilio = varA;
varA = varB;
varB = varC;
varC = auxilio;

//[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);