// Revisando Objetos

// Criando um objeto
// const pessoa = {
// // chave   valor
//     nome: 'Fabrício',
//     sobrenome: 'Caldana',
//     idade: 21,
// };

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);



// console.log(pessoa['nome']);
// console.log(pessoa['sobrenome']);

// const chave = 'nome';
// console.log(pessoa[chave]);

//////////////////////////////

// const pessoa1 = new Object();
// pessoa1.nome = 'Fabrício';
// pessoa1.sobrenome = 'Caldana';
// pessoa1.idade = 21;
// pessoa1.falarNome = function() {
//     return (`Meu nome é ${this.nome} ${this.sobrenome}`);
// };
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// Cria um método para o objeto
// console.log(pessoa1.falarNome());
// console.log(pessoa1.getDataNascimento());

// for (let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

// delete pessoa1.nome;
// console.log(pessoa1);

///////////////////////////////////////////////////

// Criar molde para objetos
// Factory Functions / Constructor Functions / Classes


// Factory Functions

// function criaPessoa(nome, sobrenome){
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Fabrício', 'Caldana');
// console.log(p1.nomeCompleto);

////////////////////////////////////////////////////

// Constructor Function

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Não permite alterar nenhum valor do objeto
}

// new = {} <- this -> this

const p1 = new Pessoa('Fabrício', 'Caldana');
// Object.freeze(p1); Congela o objeto, não permite alteração
// p1 = 'Outra Coisa'; Não é possível alterar desse jeito 
// p1.nome = 'Outro Nome'; Alterar apenas o valor do objeto
delete p1.nome; // Não funciona pois o objeto está congelado
const p2 = new Pessoa('João', 'Silva');

console.log(p1);
console.log(p2);