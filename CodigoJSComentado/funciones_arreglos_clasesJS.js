

//Las funciones son ciudadanos de primera clase en Java Script (se pueden enviar, retornar como parametros)
//Funcion declarada
function numero(){
    console.log("Esta funcion imprime un numero"); 
}

function suma(a,b){
    return a+b;   //El valor de retorno implica romper el flujo de ejecucion de la funcion
}
//Invocacion de funcion
//numero(); 
//console.log(suma(10,5)); 
let resultado_suma = suma (29,15); 
valoresPredefinidos(); //SE PUEDE LLAMAR ANTES DE LA DECLARACION SI NO SE DECLARA CON LET o CONST una funcion
function valoresPredefinidos (a = "Michael", c = 25){
    console.log(`Se ha especificado como a: ${a} y como c: ${c}` ); 
}

//valoresPredefinidos(); 
//valoresPredefinidos("Lucia", 29);

//Todas las funciones que se han declarado previamente, forman parte del escope global, es decir, sucede los mismo que con var, es una funcion cuyo ambito es de window

//console.log(window);
//miFuncion(); //ERROR:Uncaught ReferenceError: can't access lexical declaration 'miFuncion' before initialization
let miFuncion = function () {//Declaracion de funcion anonima (no tiene nombre) pero se almacena en una variable cuyo nombre la hace accesible
    console.log("Esta es una funcion que solo pertenece al ambito local donde se declara y ademas, solo puede llamarse tras su declaracion, no antes");
}

const miFuncion2 = function () {
    console.log("Normalmente en la funciones expresadas (guardadas en una variable) y anonimas se utiliza const en lugar de let");
}
//miFuncion();


/*==================ARREGLOS================*/
{
    const array = [1, true, "hola mundo", [1, 2, 3, 4, 5]];
    let tupla = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9); 
    console.log(array, "Su tamaño es: " + array.length);
    console.log(`posicion 0: ${array[0]}`);
    console.log(`posicion 3, subposicion 2: ${array[3][2]}` );
    const arrayRellenado = Array(50).fill("vacio");
    console.log(arrayRellenado); 

    array.push(56); //Insertar nuevo elemento (se redimensiona dinamicamente)
    array.pop(); //Eliminar ultimo elemento
    array.forEach(function (elemento,indice) { //en el for each se va iterando sobre los elementos y se envia el elemento a un funcion predefinida por nosotros
                                       //La correspondencia es por orden primero elemento, luego indice y finalmente el array en si mismo
        console.log(`El elemento con indice ${indice} es: ${elemento} `); 

    });

    //En mozilla development network hay mas documentacion

}

/*===============OBJETOS===================*/
{
    const persona = {
        nombre :"michael",
        apellido :"Laudrup",
        edad : 26,
        pasatiempos :  ["Deporte", "musica", "arte"],
        soltero : false,
        contacto: {
            email: "maikel@gmail.com",
            instagram:"@maikelaudruo",
            telefono: "+34 611 63 02 12"
        },

        salida : function () {console.log(`Hola, soy ${this.nombre}`)},
    }

    console.log(persona); 
    //MANERAS DE ACCEDER A ATRIBUTOS ESPECIFICOS DE UN ATRIBUTO
    persona.nombre = "Michael Laudrup"; //Acceder como si fuera un campo de clase directamente
    persona["apellido"] = "Luis gonzalez"; //Acceder como si fuera un arreglo
    persona.edad = 55;
    persona["soltero"] = true; 
    persona.salida(); 

}

