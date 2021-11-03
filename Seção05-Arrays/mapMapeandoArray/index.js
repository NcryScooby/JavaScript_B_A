// Map, mapeando o array
// Map vai sempre ter o mesmo tamanho do array original

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Dobre os números
const numerosEmDobro = numeros.map(numero => numero * 2);
console.log(numerosEmDobro);

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

const stringNome = pessoas.map(pessoa => pessoa.nome);
console.log(stringNome);

const semNome = pessoas.map(pessoa => {
    const { nome, ...resto } = pessoa;
    return resto;
});
console.log(semNome);

const comId = pessoas.map(pessoa => {
    const { nome, ...resto } = pessoa;
    return { id: Math.random(), ...resto };
});

console.log(comId);