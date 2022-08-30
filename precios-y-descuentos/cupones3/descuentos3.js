const coupons = [
    {
        name: "cupon1",
        discount: 25,
    },
    {
        name: "cupon2",
        discount: 35,
    },
    {
        name: "cupon3",
        discount: 45,
    }
];
let couponValue = "cupon1";


function isCouponValueValid (coupon) {
    return coupon.name === couponValue;
}

console.log(isCouponValueValid("cupon2"));




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

    if(!coupons.includes(Coupon)) {
        alert(`El cupon ${Coupon} no es valido`);
    } else if(coupons[0] === Coupon){
        discount = 15;
    } else if(coupons[1] === Coupon){
        discount = 30;
    } else if(coupons[2] === Coupon){
        discount = 45;
    } 

    const discountPrice = calcularPrecioConDescuento(price, discount);
    
    const ResultPrice = document.getElementById("resultPrice");
    return ResultPrice.innerText = `El precio es $${discountPrice} pesos.`    

}
