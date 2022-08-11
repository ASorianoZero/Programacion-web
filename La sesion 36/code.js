/* ID
document.getElementById('Id'): acceder a elemento por su ID
Los Id se escriben como strings con '' o ""
Se recomienda que el elemento se aguardado en una constante
*/



const titulo= document.getElementById('titlelel');
// console.log(titulo)
// console.log(titulo.textContent)



/* 
.textContent sirve para mostrar el contenido de texto y o modificarlo
*/



// titulo.textContent ='Cambio de información';
// console.log(titulo.textContent);



/* 
selector CSS
document.querySelector('selectorCSS'): accede al primer elemento que coincida con el lector CSS
- Los selectores se escriben como strings '' o ""
*/



// const title = document.querySelector('h1'); // Tag
// const title = document.querySelector('#title'); // ID
// const title = document.querySelector('.title');
// console.log(title)







/* 
Acceso a traves de clases, pseudo clases y pseudo elementos.
*/







// Const parrafo = document.querySelector('.paragraph');
// Console.log(parrafo.textContent);

// Const parrafo = document.querySelector('.paragraph:nth-child(3)');
// Console.log(parrafo.textContent);

// Const parrafo = document.querySelector('.paragraph::after');
// No funciona con pseudo elementos
// console.log(parrafo.textContent)



/* 
Tener acceso a través de la sucesión Id y selectores CSS
*/



/* 
Todos los selectores
document.querySelectorAll ('selectorCSS'): accede a todos los elementos que coincidan con el selector CSS
- Devuleven un nodeList (lista de nodos)
- Selectores se escriben como strings '' o ""
- Hay que guardarlos en constantes.
*/



// const parrafos = document.querySelectorAll('p'); // tag
const parrafos = document.querySelectorAll('.paragraph');
console.log(parrafos);



/* 
Index
*/

console.log(parrafos[0].textContent);

console.log(parrafos[1].textContent);

console.log(parrafos[2].textContent);

:'v'

