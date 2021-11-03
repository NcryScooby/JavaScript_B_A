// Arrays 
// Adicionar e remover do começo, shift e unshift. 
// Adicionar e remover do final, pop e push. 
// Adicionar e remover em qualquer posição, splice e slice

//  array literal   0          1        3   
const nomes = ['Fabrício', 'Maria', 'João'];

// Altera o nome do índice 2 para pedro
nomes[2] = 'Pedro';
// Exibe os nomes do array
console.log(nomes);

// Deleta o indice 2
delete nomes[2];

// Exibe os nomes do array com o índice 2 deletado
console.log(nomes);

// Cria um array com o construtor
const nomes2 = new Array('Fabrício', 'Maria', 'João');
console.log(nomes2);

// Passa o valor do array nomes para nomestudo com 1 a menos no array, alterando o indice também de nomes, pois estão no mesmo lugar na memória
const nomestudo = nomes;
// Remove o ultimo indice do array
nomestudo.pop();
console.log(nomestudo);
console.log(nomes);

// Faz uma cópia do array, alocando cada um em um lugar diferente da memória
const nomestudo2 = [...nomes];

// Altera a posição 0 do array
nomestudo2[0] = 'sei la';

console.log(nomestudo2);
console.log(nomes); 

// Declara um array com 3 indices
const nomes10 = ['Sérgio', 'Lucas', 'Matheus'];
// remove um indice e armazena em uma constante
const removido = nomes10.pop();
// Exibe o array com um indice removido
console.log(nomes10);
// Exibe o valor removido
console.log(removido);

// Remove o primeiro indice do array, alterando todos os indices
nomes10.shift();
// Exibe o array com o primeiro e o ultimo indice removido
console.log(nomes10);

// Adiciona na ultima posição do array
nomes10.push('Felipe');
console.log(nomes10);

// Adiciona na primeira posição do array
nomes10.unshift('João');
console.log(nomes10);

//                  0          1        2       3        4
const nomes3 = ['Fabrício', 'Maria', 'João', 'Lucas', 'Pedro'];
// Adiciona em uma constante o array fatiado, começando no indice 1 e vai até o indice 3
const novo = nomes3.slice(1, 3);

// Exibe a constante do 1 ao 3
console.log(novo);

// Como separar o Nome em um array? 
const nomeString = 'Fabrício Caldana Anelli';

// Separa o nome em um array separando pelos espaços
const nomeStringAux = nomeString.split(' ');
// Exibe a string em um array
console.log(nomeStringAux);

// Cria um array com 3 indices
const nomes30 = ['Fabrício', 'João', 'Pedro'];
// Transforma um array em uma string
const nomesAux = nomes30.join(' ');
console.log(nomesAux);