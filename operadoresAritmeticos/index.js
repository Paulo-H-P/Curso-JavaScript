/**
 * aritmeticos
 *  + Adição e Concatenação
 * - subtração
 *  ** potenciação
 *  % resto da divisão
 */

//exemplo potenciação

/**const num01 = 2;
const num02 = 10;
console.log(num01 ** num02);

//usando o incremento ++ depois é necessario fazer o incremento e depois puxar o valor novamente com console , evitar usar

let num03 = 1;
console.log(num03++);
console.log(num03);

//usando o incremento antes o valor já usa o incremento e mostra o resultado evitar usar

let num04 = 1;
console.log(++num04);

//usar o incremento neste padrão
let num05 = 10;
num05++;
console.log(num05);*/

//incremento com muliplos ou outros

let cont = 0;
cont += 2; // este comando é o mesmo que cont = cont + 2
cont += 2;
cont += 2;
console.log(cont); // resultado 6

// podemos converter strings em numeros com o seguinte comando  parseint ou float ou number

const teste01 = parseInt('5');
const teste02 = 10;

console.log(teste01 + teste02);

// para converter um numero uma string em um numero real usar o float

const teste03 = parsefloat('5,5');
const teste04 = 10;

console.log(teste03 + teste04);

// usar o Number pois ele pode ser usado tanto para inteiro como real

const teste08 = Number('5');
const teste09 = 10;

console.log(teste01 + teste02);
