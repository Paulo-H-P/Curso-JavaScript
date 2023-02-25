/*let num = [1, 2, 3];

num[3] = 8; acrescenta a 4 posição do vetor de forma automatica com resultado 1,2,3,8
num.push(7); acrescenta mais posições de forma ordenada e manual

num.sort(); organiza os numeros do menor para o maior
console.log(`vetor ${num}`);
console.log(
  `o vetor tem ${num.length} posições`
); mostra o tamanho do vetor/array
console.log(
  `o numero na posição 5 do vetor é ${num[4]}`
); mostra o numero na posição exata do vetor */

/*mostrar vetores na leta */
/*let valor = [1, 5, 6, 8, 7, 3, 9, 5];

for (let cont = 0; cont < valor.length; cont++) {
  console.log(`a posição ${cont} tem o valor ${valor[cont]}`);
  //let cont é o contador que começa de 0
  //cont < valor.lenght , o contador vai contar até o ultimo vetor
  // cont++ é o incremento de 1 em 1
}*/

//usando o metodo mais rapido de for para contagem de vetor ou objeto

/*let n = [1, 2, 3, 4, 5, 6, 7, 8, 9];
n.sort(); //ordernar valores

for (let cont in n) {
  console.log(`a posição ${cont} tem o valor ${n[cont]}`);
  modo simplificado para contagem de vetores acrescentando de 1 em 1 apenas com vetor
  e obejetos 
}*/

//indexOf pega a posição exata de onde está o numero do vetor
let numero = [1, 2, 3, 4, 5, 6];

let posicao = numero.indexOf(3);

console.log(`o valor 3 está na posição ${posicao}`);
