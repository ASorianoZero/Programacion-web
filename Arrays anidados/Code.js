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
    pokemones.push([nombre.value, tipo.value, NoPokedex.value]);

    //Imprimimos el mensaje en la etiqueta p id mensaje

    var i =pokemones.length - 1;

    mensaje.innerHTML = 'Se agregó ' + pokemones[i][0];
}

function mostrarPokemones(){
    //Código a ejecutar

    document.write(
    '<ul>' +
        '<li><img src="' +  pokemones[0][0] + '.WEBP" alt="Imagen Pokimon"></li>' +	
        '<li>Pokemon: ' + pokemones[0][0] + '</li>' + 
        '<li>Tipo: ' + pokemones[0][1] + '</li>' +
        '<li>No. Pokedex: ' + pokemones[0][2] + '</li>' +
    '</ul>'
    ); 
}