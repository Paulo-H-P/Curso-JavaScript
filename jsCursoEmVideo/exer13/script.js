function verificar() {
  let data = new Date();
  let ano = data.getFullYear(); //data com 4 digitos
  let fano = document.getElementById('txtano');
  let res = document.querySelector('div#res');

  if (fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente');
  } else {
    let fsex = document.getElementsByName('radisex');
    let idade = ano - Number(fano.value);
    //res.innerHTML = `idade calculada ${idade}`;
    let genero = '';
    let img = document.createElement('img'); // cria a imagem pelo js
    img.setAttribute('id', 'foto'); // cria um id pelo js

    if (fsex[0].checked) {
      genero = 'homem';
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'bebemenino250.png');
      } else if (idade > 10 && idade < 21) {
        //jovem
        img.setAttribute('src', 'homemjovem250.png');
      } else if (idade > 21 && idade < 50) {
        //adulto
        img.setAttribute('src', 'homem250.png');
      } else {
        //idoso
        img.setAttribute('src', 'homemidoso250.png');
      }
    } else if (fsex[1].checked) {
      genero = 'mulher';
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute('src', 'bebemenina250.png');
      } else if (idade > 10 && idade < 21) {
        //jovem
        img.setAttribute('src', 'mulherjovem250.png');
      } else if (idade > 21 && idade < 50) {
        //adulto
        img.setAttribute('src', 'mulher250.png');
      } else {
        //idoso
        img.setAttribute('src', 'idosamulher250.png');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img); //mostra a imagem
  }
}
