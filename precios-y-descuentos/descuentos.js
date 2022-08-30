const precioOriginal = 120;
const descuento = 18;



/*
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
});
*/

calcularPrecioConDescuento = (precio, descuento) =>{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento) / 100;
    return precioConDescuento;

}

function discountPrice() {
    const InputPrice = document.getElementById("inputPrice");
    const price = InputPrice.value;

    const InputDiscount = document.getElementById("inputDiscount");
    const discount = InputDiscount.value;

    const discountPrice = calcularPrecioConDescuento(price, discount);
    
    const ResultPrice = document.getElementById("resultPrice");
    return ResultPrice.innerText = `El precio es $${discountPrice} pesos.`    

}
