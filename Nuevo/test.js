let name1 = 'Victor';
let lastName = 'Flores';
let userName = 'vflores';
let age = 35;
let email = 'vickmaster@gmail.com';
let saveMoney = 6500;
let debt = 2500;

let completeName = (name1 + ' ' + lastName);

console.log(completeName);

let realmoney = saveMoney - debt;
console.log(realmoney);

function presentacion() {
    return console.log(`Mi nombre es ${completeName} pero prefiero que me digas ${userName}.`)

}
 presentacion();
