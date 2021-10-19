// Cria uma constante com um array de 3 números
const array = [1, 2, 3];

// Adiciona o quarto número ao array
array.push(4);

// Modifica o valor do array 0 para Fabrício
array[0] = 'Fabrício';

// array = 'Outro'; -> Erro, não podemos atribuir outro valor a uma constante desse jeito

// Exibe o array
console.log(array);

// Cria uma consante com nome, sobrenome e idade para uma pessoa
const nome01 = 'Fabrício';
const sobrenome01 = 'Caldana';
const idade01 = 21;

//[] -> Array, {} -> Objeto

//Cria o objeto
const pessoa1 = {
    nome: 'Fabrício',
    sobrenome: 'Caldana',
    idade: 21
};

//Exibe o nome da pessoa 1
console.log(pessoa1.nome);

//Exibe o sobrenome da pessoa 1
console.log(pessoa1.nome);

// Cria uma função que recebe por parametro nome, sobrenome e idade, também pode ser chama de Factory -> Uma função que retorna objetos
function criaPessoa (nome, sobrenome, idade) /*<-Parametro*/ {
    // Retorna um objeto com nome, sobrenome e idade
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

//Cria uma constante que recebe uma função com objeto dentro e declara os argumentos
const pessoa10 = criaPessoa('Fabrício', 'Anelli', 21); //<- Argumento

//Exibe o nome da constante
console.log(pessoa10.nome);

//Cria uma constante que recebe uma função com objeto dentro e declara os argumentos
const pessoa11 = criaPessoa('Luiz', 'Otávio', 42); //<- Argumento

//Exibe o nome da constante
console.log(pessoa11.nome);

// Outra maneira também
function criaPessoa2 (nome, sobrenome, idade) /*<-Parametro*/ {
    // Retorna um objeto com nome, sobrenome e idade
    return {
        nome,
        sobrenome,
        idade
    };
}

//Cria uma constante que recebe uma função com objeto dentro e declara os argumentos
const pessoa50 = criaPessoa2('Zeca', 'Urubu', 90);

// Exibe o nome e sobrenome da constante
console.log(pessoa50.nome, pessoa50.sobrenome);

// Cria um objeto dentro da constante
const pessoa200 = {
    nome: 'Lucas',
    sobrenome: 'Santos',
    idade: 33,

    //Quando uma função está dentro de um objeto chamado de método
    fala() {
        //this significa este contexto dentro do objeto
        console.log(`${this.nome} ${this.sobrenome} está falando Oi`);
        console.log(`A minha idade é ${this.idade}`);
    },

    //Cria um método que aumenta a idade em 1
    incrementeIdade() {
        this.idade++;
        console.log(`A minha nova idade é ${this.idade}`);
    }
};

// chama a constante com seu método.
pessoa200.fala();
pessoa200.incrementeIdade();