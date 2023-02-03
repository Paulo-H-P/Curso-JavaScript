function carregar() {
  let msg = document.getElementById('msg');
  let img = document.getElementById('imagem');
  let data = new Date(); //puxando a data
  //let hora = data.getHours(); //puxando a hora atual
  let hora = 20;

  msg.innerHTML = `Agora são ${hora} Horas.`; //exibe a hora atual
  if (hora > 0 && hora <= 12) {
    img.src = './imagens/manha250.png'; //puxando a imagem do html
    document.body.style.background = '#fec881'; //jogando cor de fundo
  } else if (hora >= 12 && hora < 18) {
    img.src = './imagens/tarde250.png';
    document.body.style.background = '#f4bc6a';
  } else {
    img.src = './imagens/noite250.png';
    document.body.style.background = '#5e6f9b';
  }
}
