// Map, mapeando o array
// Map vai sempre ter o mesmo tamanho do array original

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Dobre os números
const numerosEmDobro = numeros.map(numero => numero * 2);
console.log(numerosEmDobro);

console.log('--------------------------');

// Para cada elemento:
// Retorne apenas o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 },
    { nome: "Gustavo", idade: 32 },
    { nome: "Maria", idade: 45 },
];

// Exibe apenas o nome das pessoas
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);
console.log('--------------------------');

// Remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade }));
console.log(idades);
console.log('--------------------------');

// Exibe o id das pessoas
const comId = pessoas.map(function(obj, indice){
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});

console.log(comId);