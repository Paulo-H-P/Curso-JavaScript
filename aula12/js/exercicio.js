let num = Number(prompt('Digite um numero'));
let num1 = undefined;

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = num;

texto.innerHTML = '';
texto.innerHTML += `<p>A raiz quadrada é: ${num ** 0.5}</p>`;
texto.innerHTML += `<p>${num} é Inteiro? ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É Nan? ${Number.isNaN(num)}</p> `;
texto.innerHTML += `<p>Arredondamento para baixo ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredondamento para cima ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>com duas casa decimais ${num.toFixed(2)}</p>`;
