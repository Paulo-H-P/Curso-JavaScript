//alert , confirme , prompt(navegador)

//alert('Nossa mensagem'); //caso esse comando seja executado no console do navegador colocar o window na frente ,ex - window.alert

//confirm('pode confirmar?');

//prompt('Digite algo');

/*let num1 = prompt('Digete um numero');
let num2 = prompt('Digete outro numero');

num1 = parseInt(num1);
num2 = parseInt(num2);

let soma = num1 + num2;

alert(`A soma dos dois valores é ${soma}`);*/

let operacao = prompt(
  'digite o tipo de operação (s = soma ,sub = subtração ,m = multiplicação ou d = divisão)'
);

let num1 = prompt('digite um numero');
let num2 = prompt('digite outro numero');
let resultado = '';

num1 = Number(num1);
num2 = Number(num2);

if (operacao == 's') {
  resultado = num1 + num2;
  window.alert(`A soma dos valores é ${resultado}`);
} else if (operacao == 'sub') {
  resultado = num1 - num2;
  window.alert(`A subtração dos numeros é igual a ${resultado}`);
} else if (operacao == 'm') {
  resultado = num1 * num2;
  window.alert(`A multiplicação dos numeros é igual a ${resultado}`);
} else if (operacao == 'd') {
  resultado = num1 / num2;
  window.alert(`A divisão dos numeros é igual a ${resultado}`);
}
