const nome = 'Fabrício';
const sobrenome = 'Caldana Anelli';
const idade = 21;
const peso = 94;
const alturaEmM = 1.75;
let indiceMassaCorporal = (peso / (alturaEmM * alturaEmM));
let anoNascimento;
anoNascimento = 2021 - idade;

//  Template Strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);