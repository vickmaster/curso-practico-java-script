const coupons = [
    "cupon1",
    "cupon2",
    "cupon3",
];

calcularPrecioConDescuento = (precio, descuento) =>{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento) / 100;
    return precioConDescuento;

}

function discountPrice() {
    const InputPrice = document.getElementById("inputPrice");
    const price = InputPrice.value;

    const InputCoupon = document.getElementById("inputCoupon");
    const Coupon = InputCoupon.value;

    let discount;

    switch(Coupon) {
        case coupons[0]:
            discount = 15;
        break;
        case coupons[1]:
            discount = 25;
        break;
        case coupons[2]:
            discount = 40;
        break;
    }

    const discountPrice = calcularPrecioConDescuento(price, discount);
    
    const ResultPrice = document.getElementById("resultPrice");
    return ResultPrice.innerText = `El precio es $${discountPrice} pesos.`    

}
