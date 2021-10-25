// Capturar evento de submit do formulário
 const form = document.querySelector('#formulario');

 form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputN1 = e.target.querySelector('#n1');
    const inputN2 = e.target.querySelector('#n2');

    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);

    if (!n1 && !n2) {
        setResultado('Os dois números estão inválidos!', false);
        return;
    }

    if (!n1) {
        setResultado('Primeiro número inválido', false);
        return;
    }

    if (!n2){
        setResultado('Segundo número inválido', false);
        return;
    }

    const soma = getResult(n1, n2);

    const msg = `O resultado da soma é ${soma}.`;

    setResultado(msg, true);
 });

 function getResult(n1, n2){
    const resul = n1 + n2;
    return resul;
 }

 function criaP(){
    const p = document.createElement('p');
    return p;
 }

 function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}