/* var miArray =['dato 1', 'dato 2', 'dato 3'];
var arrMulti = [
    ['dato 1', 'dato 2', 'dato 3'], 
    ['dato 1', 'dato 2', 'dato 3'], 
    ['dato 1', 'dato 2', 'dato 3']
]; */


var pokemones=[];

var nombre = document.getElementById('nombre');
var tipo = document.getElementById('tipo');
var NoPokedex = document.getElementById('NoPokedex');
var mensaje = document.getElementById('mensaje')


var agregar= document.getElementById('agregar');
agregar.addEventListener('click', agregarpokemon);
var mostrar= document.getElementById('mostrar');
mostrar.addEventListener('click', mostrarPokemones);


function agregarpokemon(){
    /*Condicional if*/
if(nombre.value, tipo.value, NoPokedex.value === '') {
    //Código que se ejecutará
    mensaje.innerHTML = 'No se quiera pasar de listo!!'
} else {
    //Ejecuta esto si no se cumple la condición
    pokemones.push([nombre.value, tipo.value, NoPokedex.value]);

    //Imprimimos el mensaje en la etiqueta p id mensaje

    var i =pokemones.length - 1;
    
    
    for(var r = 3; r > 0 ; r--){
            mensaje.innerHTML = 'No hay nada mijo!!';
    }

    mensaje.innerHTML = 'Se agregó ' + pokemones[i][0];
};
  
}

function mostrarPokemones(){
    //Código a ejecutar
    //Condición If/Else
    if(pokemones.length == 0){
        mensaje.innerHTML = 'No hay nada mijo!!';
    }
    /*Ciclo for -> Repetir Código*/

for(var r = 0; r < 3 ; r++){
    /*Código que se repite*/
    document.write(
        '<ul>' +
            '<li><img src="' +  pokemones[r][0] + '.png" alt="Imagen Pokimon"></li>' +	
            '<li>Pokemon: ' + pokemones[r][0] + '</li>' + 
            '<li>Tipo: ' + pokemones[r][1] + '</li>' +
            '<li>No. Pokedex: ' + pokemones[r][2] + '</li>' +
        '</ul>'
        ); 
    };     
}


