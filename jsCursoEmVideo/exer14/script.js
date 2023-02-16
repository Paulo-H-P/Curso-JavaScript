function contar() {
  //essas variaveis estão como strings necessario converter
  let inicio = document.getElementById('inicio');
  let fim = document.getElementById('fim');
  let passo = document.getElementById('passo');
  let res = document.getElementById('res');

  /*let num1 = 5;
let num2 = 12;
let passo = 2;
let res = '';*/

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    alert('[ERRO] Faltam dados');
  } else {
    res.innerHTML = 'Contando...';
    //convertendo as variaveis para numeros
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (i < f) {
      //contagem crescente
      for (
        let c = i;
        c <= f;
        c += p //+= contador mais incremento
      ) {
        res.innerHTML += `${c} \u{1F449}`; // += vai mostrar todos os resultados sem
        //repetir ex 2 4 6 se for pular de 2 em dois
      }
    } else {
      //contagem decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
  }
  res.innerHTML += `\u{1F3C1}`; // emogi bandeira
}
