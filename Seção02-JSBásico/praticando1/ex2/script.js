const idade = prompt('Digite sua idade');

const texto = document.getElementById('texto');

const calcularIdade = (idade) => {
    if (idade > 17){
        return texto.innerHTML = `Você tem ${idade} anos, portanto você pode comprar bebidas alcoólicas.`;
    } else {
        return texto.innerHTML = `Você tem ${idade} anos, portanto você não pode comprar bebidas alcoólicas.`;
    }
}

calcularIdade(idade);