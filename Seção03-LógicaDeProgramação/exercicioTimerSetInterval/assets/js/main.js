let relogio = document.querySelector('.relogio');
let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let zerar = document.querySelector('.zerar');

let timer;
let segundos = 0;

function getTimeFromSeconds(segundos){
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciaRelogio(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function (e){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function (e){
    relogio.classList.add('pausado');
    clearInterval(timer);
});

zerar.addEventListener('click', function (e){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});