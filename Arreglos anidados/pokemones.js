// Definimos nuestro arreglo multidimensional con los datos de los pokemones

var pokemones = [
    ['Mewtwo', 'Psíquico', '150'],         // Índice 0
    ['Gardevoir', 'Psíquico', '282'],    // Índice 1
    ['Rayquaza', 'Cielo', '384']         // Índice 2
];

//document.write(pokemones[0][0])

//creamos las variables que traerán el id de HTML

var miImagen = document.getElementById ('imagen');
var miNombre = document.getElementById ('nombre');
var miTipo = document.getElementById ('tipo');
var miNúmero = document.getElementById ('noDex');

var numero = prompt("Erabe mugroso de 0 al 2");

//Insertar texto dentro de el elemento html

miImagen.innerHTML = '<img src="imagenes/' + pokemones[numero][0] + '.png">';
miNombre.innerText = 'Pokémon: ' + pokemones [numero][0];
miTipo.innerText = 'Tipo: ' + pokemones [numero][1];
miNúmero.innerText = 'No. Pókedex: ' + pokemones [numero][2];