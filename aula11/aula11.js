let num1 = 10;
let num2 = 2;
let num3 = 54.65646465454;

console.log(num1.toString() + num2); // num1 convertido em string não vai somar e sim concatenar.

// transformar number em string
num1 = num1.toString(); // transforma a variavel de number para string
console.log(typeof num1); // identifica se a variavel é number,strging ou indefinida

//pegar o binario
console.log(num1.toString(2));

//casas decimais
console.log(num3.toFixed(2)); // ajusta o numero para que tenha apenas duas casas decimais

//verificar se um numero é inteiro
console.log(Number.isInteger(num2));
