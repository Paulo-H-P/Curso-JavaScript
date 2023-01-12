//alert , confirme , prompt(navegador)

//alert('Nossa mensagem'); //caso esse comando seja executado no console do navegador colocar o window na frente ,ex - window.alert

//confirm('pode confirmar?');

//prompt('Digite algo');

let num1 = prompt('Digete um numero');
let num2 = prompt('Digete outro numero');

num1 = parseInt(num1);
num2 = parseInt(num2);

let soma = num1 + num2;

alert(`A soma dos dois valores é ${soma}`);
