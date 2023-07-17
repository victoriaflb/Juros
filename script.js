var entradaDados = require('readline-sync')

console.log("APLICAÇÃO DE JUROS: \n")

let valor = entradaDados.question("Informe o valor devido: ");
let dias_vencidos_boleto = entradaDados.question("Informe os dias que se passaram o vencimento do boleto: ");


if (dias_vencidos_boleto <= 0) {
    console.log(`Não há juros para ser calculado`)
} else if (dias_vencidos_boleto >= 15) {
    let calculo = valor * Math.pow(1 + 10 / 100, dias_vencidos_boleto);
    console.log(`Você deve R$ ${calculo.toFixed(2)} reais`)
} else {
    let calculo = valor * Math.pow(1 + 5 / 100, dias_vencidos_boleto);
    console.log(`Você deve R$ ${calculo.toFixed(2)} reais`)
}

