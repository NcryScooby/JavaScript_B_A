function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    //Cria um array pessoas
    const pessoas = [];

//    form.onsubmit = function (evento) {
//        //Evita com que a página seja recarregada
//        evento.preventDefault();
//        alert('Formulário Enviado');
//        console.log('Formulário Enviado');
//    };

    function recebeEventoForm (evento) {
        //evita com que a página seja carregada
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        //Adiciona + 1 no array com um objeto dentro.
       pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
       });

        console.log(pessoas);

        // Mostra o texto no html com o valor exato dos objetos
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }
    //evita com que a página seja carregada
    form.addEventListener('submit', recebeEventoForm);

}
//Chama a função
meuEscopo();