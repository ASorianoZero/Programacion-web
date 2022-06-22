/*

    Objetos

    Son estructuras de datos que representan propiedades, valores y acciones.

    Propiedades o atributos

        -Son las características del objeto. (Nombre, Tipo, Poder, Habilidades)

        -Se representan por pares de 'clave (key)' : 'valor (value)'

        -Datos: Strings. Numbers (Int o Float), Booleans, Arrays.
    
    Comportamientos o acciones

        -Es aquello que puede hacer un objeto (Comer, Atacar, Defenderse, Evoluciona)

        -Se definen a través de funciones.
        
    -----

        Paramdeclarar un objeto escribimos:
        
        const nombreObjeto = {
            //Pares clave : valor key : value,
            key: value,
            kay: value,
            key: value
        }

    Para acceder a as propiedades y acciones del objeto utilizamos la nomenclatura del punto '.'

        nombreObjeto.key


*/

const pokemon = {
    nombre: 'pikachu',
    poder: 1000,
    capturado : true,
    habilidades: ['Impactrueno', 'Rayo', 'Chispitas']
}

/*
//console.log(pokemon)
console.log(pokemon.nombre);
console.log(pokemon.poder);
console.log(pokemon.capturado);
console.log(pokemon.habilidades);
console.log(pokemon.habilidades[0]);
console.log(pokemon.habilidades[1]);
console.log(pokemon.habilidades[2]);
*/

//Ciclo For In

for (let key in pokemon){
    console.log(key)
}

for (let value in pokemon){
    console.log(pokemon[value])
}

for(let key of pokemon.habilidades){
    console.log(key)
}