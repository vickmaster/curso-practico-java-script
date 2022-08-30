const persona = {
    visual: 35,
    auditivo: 45,
    kinestesico: 20,
    tipoInstintivo: ['sexual','social','supervivencia']

}
/*
function representationSystem(person){
    for(const key in person){ 
        console.log(person[key]);        
    }
}

representationSystem(persona);


for(const type of persona.tipoInstintivo){
    console.log(type);
}

console.log(persona.tipoInstintivo.join(`, `));
*/

function printElementByElement(arreglo) {
    const arr = Object.values(arreglo);
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

printElementByElement(persona);