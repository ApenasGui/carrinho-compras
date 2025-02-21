var valor = 576.73
var notas = [100, 50, 20, 10, 5, 2]
var moedas = [100, 50, 25, 10, 5, 1]
var centavos = Math.round(valor*100)

console.log('NOTAS: ')
for (var i = 0; i < notas.length; i++){
    let quantidade = Math.floor(centavos / (notas[i] * 100))
    console.log(`${quantidade} nota (s) de R$ ${(notas[i])}.00`)
    centavos %= notas[i]*100
}
console.log('MOEDAS: ')
for (var i = 0; i < moedas.length; i++){
    var quantidade = Math.floor(centavos / (moedas[i]))
    console.log(`${quantidade} moeda (s) de R$ ${(moedas[i] / 100).toFixed(2)}`)
    centavos %= moedas[i]
}