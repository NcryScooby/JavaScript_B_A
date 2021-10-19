//            01234567
const nome = 'Fabrício';

//Indices do Array 0        1        2  
const alunos = ['Luiz', 'Maria', 'João']; // Array

// Exibir array inteiro
console.log(alunos);

// Exibir array da posição 1
console.log(alunos[1]);

// Editar a posição 0 do Array
alunos[0] = 'Fabrício';

// Exibir array inteiro
console.log(alunos);

// Adicionando novo nome na posição 3 do Array
alunos[3] = 'Luiza';

// Exibir array inteiro
console.log(alunos);

// Descobrir o Tamanho do array
console.log(alunos.length);

// Adicionar mais nomes no final do array
alunos[alunos.length] = 'Anderson';
alunos[alunos.length] = 'Caren';
alunos[alunos.length] = 'Bianca';

// Exibir array inteiro
console.log(alunos);

// Adicionar mais nomes no final do array
alunos.push('Kleber', 'Alfredo');

// Exibir array inteiro
console.log(alunos);

// Adicionar nomes no inicio do array
alunos.unshift('José');
alunos.unshift('Arnaldo'); // Vai ficar no indice 0 pois executamos unshift depois de José

// Exibir array inteiro
console.log(alunos);

// Remove nomes do fim do array
alunos.pop();

// Exibir array inteiro
console.log(alunos);

// Salvar em uma constante o nome do removido do array
const removido = alunos.pop();

// Exibir nome do removido do array
console.log(removido);

// Exibir array inteiro
console.log(alunos);

// Remove o nome do inicio do array e armazena o removido em uma constante
const removido2 = alunos.shift();

// Exibir nome do removido do array
console.log(removido2);

// Exibir array inteiro
console.log(alunos);

// Remove um nome do array sem alterar os indices, deixando o indice vazio
delete alunos[1];

// Exibir array inteiro
console.log(alunos);

// Exibe um lugar que não existe no array
console.log(alunos[50]);

// Exibe o array do Elemento 0 ao Elemento 3
console.log(alunos.slice(0, 3));

// Exibe o array do Elemento 0 ao Elemento -3
console.log(alunos.slice(0, -4));

// Verifica se é um array com true ou false
console.log(alunos instanceof Array);