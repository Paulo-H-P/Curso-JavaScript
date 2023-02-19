function tabuada() {
  let num = document.getElementById('txtn');
  let tab = document.getElementById('seltab');

  if (num.value.length == 0) {
    window.alert('[ERRO] Dados invalidos');
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = '';
    while (c <= 10) {
      let item =
        document.createElement(
          'option'
        ); /* vai criar elemento de escolha dentro do select
      é como se no select do html fosse criado as tags options com os valores*/
      item.text = `${n} x ${c} = ${n * c}`; //item.txt são os valores que vão ficar dentro das opções criadas dentro do select
      tab.appendChild(item);
      c++;
    }
  }
}
