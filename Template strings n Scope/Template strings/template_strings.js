/* 

    Template strings

    Son cadenas de textoque permiten simplificar el código cuando queremos concatenar datos, estos se delimitan con 
    dos tildes invertidas o acentos graves:
    
        `Template string`

    Pueden tener expresiones, estas se identifican con el signo del dólar y envueltas en llaves.

        ${}  <-Esto es un marcador

    Una expresión es cualquier unidad de código válido que se resuelve en un valor.

        x='gato'     -Asignación
        3+4          -Aritmética
        true==true   -Lógica

    ${expresión}
*/

var nombre = 'Juan';
var apellido = 'Caballo';
var edad = 35;

//Así concatenamos cadenas de texto
console.log('Hola ' + nombre +' '+ apellido + ' '+ 'tienes' + ' ' + edad + ' ' + 'años.');

//Así utilizamos los template strings
console.log(`Hola ${nombre} ${apellido} tienea ${edad} años.`);

document.write(`El siguiente año tendrás ${edad+1} años`);
