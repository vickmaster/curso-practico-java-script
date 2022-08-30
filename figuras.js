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