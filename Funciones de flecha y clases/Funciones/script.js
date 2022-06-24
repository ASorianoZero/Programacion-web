/*

    Funciones

    Son fragmentos de código ques escribimos para ejecutar una tarea y volver a escribir el mismo más de una vez.

    - Modularizamos el código
    - Es más solventar errores
    - Deben realizar una sola tarea

    Esta es la sintaxis tradicional

        function nombreFunction () {
            //El código a ejecutar
        };

    Esta es la forma con Es6

        const nombreFunction = () => {
            //Código a ejecutar
        }

    Funciones pueden recibir parámetros y van entre los paréntesis.

    ... (parámetro1, parámetro2) ...

    Estos parametros se usaran dentro de la función.

    Las funciones pueden devolver valores y se usa la palabra reservada 'return'

    ...{
        return parámetro1 + parámetro2
    }

    Las funciones tienen que ser invocadas y las tenemos que llamar por fuera de la función.

    nombreFunction();

*/

//Tradicional

function saludar(){
    console.log('>:c Fuera de mi jardín!');
};

saludar();

//Nueva Forma Funciones de Flecha

const mensajito = (dia) => {
    console.log(`Hoy es ${dia}`);
}

mensajito('Viernes');
mensajito('Lunes');
mensajito('Martes');