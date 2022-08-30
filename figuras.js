alert("hola");
/*
//codigo del cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}`)

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es ${perimetroCuadrado}.`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es ${areaCuadrado}.`);
console.groupEnd();
*/
/*
const perimetroCuadrado = lado => {
    return lado * 4;
} 

console.log(perimetroCuadrado(3));
*/

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado
}




/*
//codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


console.log(`Los lados del triangulo miden ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y ${baseTriangulo} cm.`);

console.log(`La altura del triangulo es ${alturaTriangulo} cm.`)

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo es ${perimetroTriangulo}cm.`);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log(`El area del triangulo es ${areaTriangulo} cm^2.`);

console.groupEnd();
*/

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return base * altura / 2;
}
    console.log(areaTriangulo(5,6));
    console.log(perimetroTriangulo(3,3,4));



/*
//codigo del circulo
console.group("circulo");

const radioCirculo = 4;
console.log(`El radio del circulo es ${radioCirculo}.`);
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es ${diametroCirculo}.`)

const PI = Math.PI;
console.log(`El valor de PI es ${PI}.`)
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del circulo es ${perimetroCirculo}.`);
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(`El area del circulo es ${areaCirculo}`);


console.groupEnd();
*/
const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
function areaCirculo(radio) {
    return PI * radio * radio;

}



    // Aqui interactuamos con el HTML CUADRADO

    function calcularPerimetroCuadrado() {
        const input = document.getElementById("inputCuadrado");
        const value = input.value;
        const perimetro = perimetroCuadrado(value);
        alert(perimetro);  
    }
    function calcularAreaCuadrado() {
        const input = document.getElementById("inputCuadrado");
        const value = input.value;
        const area = areaCuadrado(value);
        alert(area);  
    }

    // Aqui interactuamos con el HTML TRIANGULO

    function calcularPerimetroTriangulo() {
        const input1 = document.getElementById("inputLado1");
        const ladoT1 = Number(input1.value);
        const input2 = document.getElementById("inputLado2");
        const ladoT2 = Number(input2.value);
        const input3 = document.getElementById("inputLado3");
        const ladoT3 = Number(input3.value);
        const perimetro = perimetroTriangulo(ladoT1, ladoT2, ladoT3);
        alert(perimetro);  
    }
    function calcularAreaTriangulo() {
        const input1 = document.getElementById("width");
        const baseT = Number(input1.value);
        const input2 = document.getElementById("hight");
        const alturaT = Number(input2.value);
        const area = areaTriangulo(baseT, alturaT);
        alert(`El area es de ${area} cm^2.`);
    }

    

// Aqui interactuamos con el HTML del Circulo

    function calcularPerimetroCirculo() {
        const input = document.getElementById("inputRadioCirculo");
        const radioC = input.value;
        const perimetro = perimetroCirculo(radioC);
        alert(perimetro);  
    }
    function calcularAreaCirculo() {
        const input = document.getElementById("inputRadioCirculo");
        const radioC = input.value;
        const area = areaCirculo(radioC);
        alert(area);  
    }
// Aqui interactuamos con el HTML de altura de TRIANGULO ISOCELES

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1");
    const ladoT1 = Number(input1.value);
    const input2 = document.getElementById("inputLado2");
    const ladoT2 = Number(input2.value);
    const input3 = document.getElementById("inputLado3");
    const ladoT3 = Number(input3.value);
    const perimetro = perimetroTriangulo(ladoT1, ladoT2, ladoT3);
    alert(perimetro);  
}


// Validacion del triangulo isoceles


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


