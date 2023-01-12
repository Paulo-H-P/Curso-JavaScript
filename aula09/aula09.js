//substituindo variaveis

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let varAux = undefined;

varAux = varA; //puxa a variavel A
varA = varB; //puxa a variavel B
varB = varC; //puxa a variavel C
varC = varAux; //puxa a Variavel A

console.log(varA, varB, varC);
