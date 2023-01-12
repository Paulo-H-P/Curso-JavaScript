let precoGas = 5.79; //let puxa indica que vai ser usado uma variavel , caso seja uns constante usar o comando CONST
let mediaConsumo = 10;
let distanciaPerco = 1679;

let ConsumoTotal = distanciaPerco / mediaConsumo;
let totalGasto = ConsumoTotal * precoGas;

console.log(totalGasto.toFixed(2)); //to fixed fixa a quantidade de casas decimais
