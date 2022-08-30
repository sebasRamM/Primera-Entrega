let totalCompra = 0
let productoSeleccionado = parseInt(prompt('Ingresa el numero del producto que quieres comprar: 1. Hamburguesa - 2. Papas - 3. Pizza - 4. Gaseosa'))
let seguirComprado = true
let decision

while(seguirComprado === true) {
    if(productoSeleccionado === 1) {
        totalCompra = totalCompra + 20
    } else if(productoSeleccionado === 2){
        totalCompra = totalCompra + 10
    } else if(productoSeleccionado === 3) {
        totalCompra = totalCompra + 20
    } else if(productoSeleccionado === 4) {
        totalCompra = totalCompra + 5
    } else{
        productoSeleccionado = prompt('Ingresa un producto existente: 1. Hamburguesa - 2. Papas - 3. Pizza - 4. Gaseosa')
        continue
    }

    decision = parseInt(prompt('Quieres seguir agregando productos? 1. Si - 2.No'))
    if(decision === 1) {
        productoSeleccionado  = parseInt(prompt('Ingresa el numero del producto que quieres comprar: 1. Hamburguesa - 2. Papas - 3. Pizza - 4. Gaseosa'))
    } else if (decision === 2) {
        seguirComprado = false
    }
}

alert('El valor total sin descuento ni impuestos es: '+totalCompra)

function calcularPrecioConDescuento(valor) {
    let descuento = 0
    if(valor <= 60) {
        descuento = 10
    } else if(valor > 60 && valor <= 80) {
        descuento = 15
    } else if(valor > 80 && valor <= 100){
        descuento = 20
    } else {
        descuento = 25
    }

    let valorDescuento = valor * (descuento / 100)
    valor = valor - valorDescuento
    return valor
}
let valorConDescuento = calcularPrecioConDescuento(totalCompra)
alert('El total con descuento sin impuesto es: '+valorConDescuento)

function calcularPrecioConImpuesto(valor) {
    const impuestos = valor * (8/100)
    return valor + impuestos
}

let valorFinalConImpuesto = calcularPrecioConImpuesto(valorConDescuento)
alert('El valor final a pagar es de: '+valorFinalConImpuesto)

