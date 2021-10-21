const raio = prompt('Digite o raio do círculo');
const texto = document.getElementById('texto');

calcularArea = (raio) => {
    const pi = Math.PI;
    const area = (pi * (raio * raio))
    texto.innerHTML = `Área do círculo é ${area.toFixed(2)}`;
}

calcularArea(raio);
console.log(calcularArea(raio));