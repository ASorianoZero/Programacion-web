//Guardamos el número de pokemones que el usuario elige.
var numero = prompt("¿Cuántos Pokemones quieres?");


//Vamos a declarar nuestro array
var pokemones = [];

//Declaramos nuestro ciclo
for (var i = 0; i < numero; i++){
    var pokemon = prompt("Escribe el nombre del pokemon!");

    //Agrego el dato del usuario al Array
    pokemones.push(pokemon);

    //Imprimir en el documento
    document.write("<strong>" + pokemones[i] + "</strong> yo te elijo!<br>");
}



//Imprimimos la línea final en el documento
document.write("Has elegido tus "+ numero + " pokemones!");

