// Factory Functions, funções de fábrica
// Funções que retornam um objeto
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        // getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // setter
        set nomeCompleto(valor) {
            // separa o nome e sobrenome pelo espaço em um array
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },

        altura: altura,
        peso: peso,

        get imc(){ // Finge ser um atributo do objeto - getter
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2);
        }
    };
}

// This -> recebe  o valor de quem executou a função

const p1 = criaPessoa('Fabrício', 'Caldana', 1.75, 92);
p1.nomeCompleto = 'José Silva'
console.log(p1.nome);
console.log(p1.sobrenome);
//console.log(p1.imc);
console.log(p1.fala('está bem'));

const p2 = criaPessoa('João', 'Silva', 1.85, 80);
const p3 = criaPessoa('Maria', 'Júlia', 1.55, 56);
const p4 = criaPessoa('Gabriela', 'Santos', 1.64, 60);

console.log(`Nome ${p3.nomeCompleto} IMC ${p3.imc} Peso ${p3.peso}kg`);