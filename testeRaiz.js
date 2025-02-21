var n = [10, 20.1, 5.1]
var delta = 4 * n[0] * n[2]
var raiz = Math.sqrt((n[1] * n[1]) - delta)
var x1 = (- n[1] - raiz)/(2 * n[0])
var x2 = (- n[1] + raiz)/(2 * n[0])
if (isNaN(x1) || isNaN(x2)) {
    console.log('Impossivel calcular')
} else {
    console.log(`R1 = ${x2.toFixed(5)}`)
    console.log(`R2 = ${x1.toFixed(5)}`)
}
