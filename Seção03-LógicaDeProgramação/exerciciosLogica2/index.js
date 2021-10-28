// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number)
// retorne true se a imagem estiver no modo paisagem

function ePaisagem (largura, altura) {
    if (largura > altura){
        return true;
    } else {
        return false;
    }
}

console.log(ePaisagem(200, 1011));

// Modo mais fácil

const ePaisagem2 = (largura, altura) => largura > altura;

console.log(ePaisagem2(200, 100));