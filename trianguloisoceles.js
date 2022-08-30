function altura(lado, base){
    return(Math.sqrt((lado**2)-((base/2)**2)));
}

function alturaTriangulo() {
    const uno = document.getElementById("lado1")
    const lado1t = parseInt(uno.value);

    const dos = document.getElementById("lado2")
    const lado2t = parseInt(dos.value);

    const tres = document.getElementById("base")
    const baseT = parseInt(tres.value);

    if(lado1t !== lado2t) {
        alert("no es un triangulo Isoceles");
    } else {
        const alturaT = altura(lado1t, baseT);
        alert(alturaT);   
    }
}

