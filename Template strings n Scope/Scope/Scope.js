/*

    Scope o Ámbito es la zona donde existe una variable o constante.

    Variables son espacios que reservamos para salvar información que podria cambiar a lo largo del uso del 
    programa.

        -Se declaran.       ->var nombre;
        -Se inicializan.    ->var nombre = 'Juan';
        -Se modifican       ->nombre = 'Caballo Juan';
        
    Con Ecma Script 6 (Última versión de JS) se usa para declara variables la palabra 'let'. No se recomienda 
    utilizar 'var', esto es por un concepto reciencte llamado 'hoisting'.

    Contexto de Variables y constantes

    Global: Podemos acceder a ellas desde cualquier parte del código.
    Local: Variables son creadas dentro de una función , solo se puede acceder 


*/

let nombre = 'Juan'; //INICIALIZAMOS UNA VARIABLE GLOBAL

console.log(`Mi nombre es ${nombre}`);

function saludar(){
    console.log(`Hola ${nombre}`)
    let apellido = 'Caballo'; //Var ámbito local
    console.log(`Tu nombre completo es ${nombre} ${apellido}`)

    //Función anidada
    function despedida(){
        //Código que ejecuta mi función anidada
        nombre = 'Juanballo';
        console.log('nombre');
    }

    despedida();
    
}

saludar(); //Invocamos a la función
despedida();//Invocamo la función
//console.log(apellido) //Error