//calculo de imc

const nome = 'fred';
const sobrenome = 'pinheiro';
const idade = 40;
const peso = 97;
const altura = 1.79;
const anoAtual = 2022;

let imc = peso / (altura * altura);
let nascimento = anoAtual - idade;

console.log(nome, 'Seu ano de nascimento foi', nascimento, 'seu imc é', imc);

//usando o template string
//toFixed(numero) define a quantidade de casas decimais

console.log(
  `${nome} Seu ano de ${nascimento} foi ${nascimento} seu imc é ${imc.toFixed(
    2
  )}`
);
