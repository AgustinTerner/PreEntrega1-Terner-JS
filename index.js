// Calcular descuento de una barra de chocolate:

const porcentajeMayor = 100
const precioBarraChocolate = 2300
let descuento = prompt("Ingrese un numero para calcular precio con descuento")

function calcularDescuento(n1, n2, n3) {
    let calculo = (n1 * n2) / n3
    let restaPorDescuento = precioBarraChocolate - calculo
    console.log("El precio de la barra es de $2300.")
    console.log("Si aplicamos un cuponh de %" + descuento + " de descuento, el precion total de la barra de chocolate con descuento aplicado seria $" + restaPorDescuento)
}

calcularDescuento(descuento, precioBarraChocolate, porcentajeMayor)

// Elegir operacion:

const numero1 = 35
const numero2 = 23

let operador = prompt("Los numeros son 35 y 23, ingrese + para sumarlos, - para restarlos, * para multiplicarlos, / para dividirlos")

function operarNumeros(n1, n2) {
    if (operador === '+') {
        let suma = n1 + n2
        console.log("La suma es " + suma)
    }

    else if (operador === '-') {
        let restaPositiva = n1 - n2
        console.log("La resta de 35 - 23 es " + restaPositiva)
        let restaNegativa = n2 - n1
        console.log("Y la resta de 23 - 35 es " + restaNegativa)
    }
    else if (operador === '*') {
        let multiplicacion = n1 * n2
        console.log("La multiplicaicon es " + multiplicacion)
    }
    else if (operador === '/') {
        let division = n1 / n2
        console.log("La divison es " + division)
    }
}

operarNumeros(numero1, numero2)

// Cantidad de letras en una palabra:

let palabra = prompt("ingrese una palabra")

for(i = 0; i < palabra.length; i++){
    if(i !== ' ' || ','){
        console.log("La palabra tiene " + palabra.length + " letras")
    }
}
