//STRINGS
//01234567;
let umaString = 'um texto';

console.log(umaString[4]); //vai exibir a letra(string) na posição 4

//CONCATENAÇÃO
// o segundo texto " em um lindo dia" não faz parte da variavel

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

//pegar o indice da primeira letra da palavra
console.log(umaString.indexOf('texto'));

//indice de trás para frente
console.log(umaString.lastIndexOf('o'));

//match , expressões regulares  (separa as silabas destacando-as)
console.log(umaString.match(/[a-z]/g));

//comando replace , troca uma palavra
console.log(umaString.replace('um', 'outro'));

//para substituir mais de uma letra
console.log(umaString.replace(/t/g, '#'));

//ver o tamanho da string
console.log(umaString.length);

//fatiar texto pegar determinado trecho de um texto
console.log(umaString.slice(0, 3));

//dividir strings
console.log(umaString.split(' ')); // vai ler como espaço entre as frases entre aspas

//mudar string para maiuscula
console.log(umaString.toLocaleUpperCase());

//mudar string para minuscula
console.log(umaString.toLocaleLowerCase());
