function clicar() {
  let num = document.getElementById('num');
  let res = document.getElementById('res');
  let calculo = '';

  let num1 = Number(num.value);

  if (num1 == 0 || num1 == '') {
    window.alert('[ERRO] Dados invalidos');
  } else {
    res.innerHTML = `Tabuada do Numero: ${num1}</br>`;

    for (let c = 1; c <= 10; c++)
      res.innerHTML += `${num1}x${c}=${num1 * c}<br>`;
  }
}
