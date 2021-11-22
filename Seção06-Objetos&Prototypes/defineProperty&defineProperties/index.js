// defineProperty & defineProperties

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave
    value: estoque, // Valor da chave
    writable: true, // Pode alterar ou não o valor
    configurable: false, // Pode deletar ou não o atributo
  });

//   Object.defineProperties(this, {
//     nome: {
//       enumerable: true,
//       value: nome,
//       writable: true,
//       configurable: true,
//     },
//     preco: {
//       enumerable: true,
//       value: preco,
//       writable: true,
//       configurable: true,
//     },
//   });
}

const p1 = new Produto("Camiseta", 20, 3);
// p1.estoque = 10000;
// delete p1.estoque;
console.log(p1);

// Exibe as chaves do produto
// console.log(Object.keys(p1));

for (let chave in p1) {
  console.log(chave);
}
