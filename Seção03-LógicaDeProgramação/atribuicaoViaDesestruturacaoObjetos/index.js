// Atribuição via desestruturação por Objetos

// Cria uma objeto dentro de um objeto
const pessoa = {
    nome: 'Fabrício',
    sobrenome: 'Caldana',
    idade: 21,
    endereco: {
        rua: 'Rua Prosperidade',
        numero: 250
    }
};

// Atribuição via desestruturação por Objetos
// Atribui as propriedades do objeto pessoa para as variáveis n, sobrenome e idade
const { nome: n, sobrenome, idade } = pessoa;

// Exibe o resultado do objeto
console.log(n, sobrenome, idade);

// Atribui as propriedades do objeto endereço para as variáveis rua e numero
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);

// Pega o resto, exceto o nome
const { nome, ...resto } = pessoa;

// Exibe o resto sem o nome
console.log(resto);