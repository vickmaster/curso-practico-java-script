const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2'); //por etiqueta, solo la primera etiqueta. 
const input = document.querySelector('input');
const p = document.querySelectorAll('p'); //abarca todas la etiquetas en el Dom 'p'
const parrafito = document.querySelector('.parrafito'); //por clase
//const pidElement = document.getElementById('pid'); //por id
const pidElement = document.querySelector('#pid'); 

console.log(pidElement);



h1.innerHTML = ('Metodo INNER <br/> se pueden escribir HTML como la entiqueta BR');
h2.innerText = ('con innerText <br/> solo escribe el texto');

console.log(h1.getAttribute('class')); //obtiene la clase de un elemento html.
h1.setAttribute('class', 'rojo'); //Cambia el atributo de un elemento html, en este caso la clase. 

h1.classList.add('azul'); // agrega clases a un elemento. 
h1.classList.remove('amarillo'); // retira clases a un elemento. 

input.value = 'abc';   

const img = document.createElement('img');
img.setAttribute('src', './logo3.png');

pidElement.appendChild(img);