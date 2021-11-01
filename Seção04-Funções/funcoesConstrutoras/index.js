// Constructor Functions constrói objetos
// Factory Functions fabrica objetos
// Construtora -> sempre inicia com letra maiúscula -> Pessoa (new)

function Pessoa (nome, sobrenome){
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInternal = function(){
        console.log('metodo interno');
    };

    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    };
}
//        new cria um objeto vazio
const p1 = new Pessoa('Fabrício', 'Caldana');
const p2 = new Pessoa('João', 'Silva');
const p3 = new Pessoa('Maria', 'Souza');

console.log(p1.nome);
console.log(p2.sobrenome);

p1.metodo();