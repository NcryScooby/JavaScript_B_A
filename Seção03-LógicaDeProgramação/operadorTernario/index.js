// Operador Ternário ? : - se ? senão :

// ? Verdadeiro   
// : Falso

// Declara a pontuação do usuário
const pontos = 1000;

// Se pontos for maior ou igual a 1000, é usuário VIP senão é usuário normal
const statusUsuario = pontos >= 1000 ? 'Usuário VIP' : 'Usuário normal';

// if (pontos >= 1000) {
//   const pontosUsuario = 'Usuário VIP';
//   console.log(pontosUsuario);
//} else {
//    const pontosUsuario = 'Usuário normal';
//    console.log(pontosUsuario);
//}

// Exibe se é usuário VIP ou normal
console.log(statusUsuario);


// Diz que corUsuario é nulo
const corUsusario = 'pink';

// Se corUsuario for nulo, então corUsuario é preto, chamamos isso de fallback
const corPadrao = corUsusario || 'Preto';

// Exibite a cor do Padrão
console.log(corPadrao);