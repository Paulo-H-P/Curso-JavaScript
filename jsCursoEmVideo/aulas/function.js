/*function parimp(n) {
  //criar a função o ,n será substituido por 11
  if (n % 2 == 0) {
    return 'par';
  } else {
    return 'impar';
  }
}

let res = parimp(11); //criar a variavel

console.log(res); //puxando o resultado na tela*/

//função usando soma

function soma(n3, n4) {
  return n3 + n4;
}

console.log(soma(2, 2)); //essa resposta cria a varial puxando a função com resultado 4

//multiplicação jogando a gunção dentro da variavel

let v = function (x) {
  return x * 2;
};

console.log(v(5));

//fatorial

function fatorial(n) {
  let fat = 1;

  for (let c = n; c > 1; c--) {
    fat *= c;
  }
  return fat;
}

console.log(fatorial(5));
