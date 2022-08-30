let numeros = ['uno', 'dos', 'tres', 'cuatro'];
/*
function firstElement(array) {
    console.log(array[1]);
} 

firstElement(numeros);
*/

console.log(numeros.length);

function arrayValues(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
    
}

arrayValues(numeros);
