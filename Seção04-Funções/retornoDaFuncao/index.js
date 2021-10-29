// Retorno das funções
// return
// Retorna um valor
// Termina a função

function soma(a, b) {
  return a + b;
}

const sl = soma(5, 5);
console.log(sl);

///////////////

function soma2(x, y) {
  console.log(x + y);
}

soma2(2, 5);

///////////////

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

const p1 = criaPessoa("Fabrício", "Caldana");
console.log(p1);

const p2 = criaPessoa("Fab", "Anelli");
console.log(p2);

///////////////

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo("Mundo"));

///////////////

function duplica(x) {
  return x * 2;
}

function triplica(x) {
  return x * 3;
}

function quadriplica(x) {
  return x * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

///////////////

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica2 = criaMultiplicador(2);
const triplica2 = criaMultiplicador(3);
const quadriplica2 = criaMultiplicador(4);

console.log(duplica2(2));
console.log(triplica2(2));
console.log(quadriplica2(2));
