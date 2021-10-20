const n1 = prompt('Digite um número');
const n2 = prompt('Digite outro número');

document.body.innerHTML = `<p>A soma entre ${n1} e ${n2} é <strong>${parseFloat(n1) + parseFloat(n2)}</strong></p>`