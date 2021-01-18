


//===================FUNCIONES======================

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

//INFINITO NUMERO DE PARAMETROS EN UNA FUNCION (PARAMETROS REST)
function sumarInfinitosNumeros(a, b, ...c) { //La c se recibira como un arreglo de elementos
    let resultado = a + b;
    let contador = 2; 
    c.forEach(function (element, indice) {
        resultado += element;
        contador++;
    }); 
    console.log(`Se han sumado en total ${contador} numeros`); 
    return resultado; 
} 


console.log(sumarInfinitosNumeros(1,2,3,4,5,6,7,8,9)); 
//Sa salia de esta ejecución es: 
   /*
    * Se han sumado en total 9 numeros 
    * 54
    * 
    */
 
 //Arrow functions
{
    const saludar = nombre => console.log(`Hola ${nombre}`);

    let sumar = (a, b) => a + b;

    const funcionesVariasSentencias = () => {
        console.log(`Linea 1`);
        let x = 3;
        console.log(x);
    }

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let suma = 0; 
    numeros.forEach((componente) => suma += componente);
    console.log(`la suma de todos los elementos del arreglo numeros es: ${suma}`); 

    let casa = {
        nombre: "Amadeus",
        perrito() { //Hay que tener mucho cuidado con este tipo de declaraciones
            console.log(`Nombre: ${this.nombre}`);
        }
    }

    casa.perrito(); 



}








/*======= FIN SECCION DE FUNCIONES =========*/
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
    //En mozilla development network hay mas documentacion de funciones de arreglos
}
{   //Mezclar varios arreglos de manera más facíl con el uso del operador Spread
    const arreglo1 = [1, 2, 3, 4, 5], arreglo2 = [4, 5, 6, 7, 8];
    const cocatArreglos = [...arreglo1,...arreglo2];




}






/*===========FIN ARREGLOS =================*/
/*===============OBJETOS===================*/
/*
 * Los objetos siempre tienen valores asignados en sus atributos (son instancias de algo, no es como una clase de java) 
 */
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

    /*NUEVA FORMA DE CREAR OBJETOS*/
    let x = 10;
    let y = 5;
    let z = 3;

    const coordenada1 = {
        x,  /*Se omite x: x para asiganarle el valor 10 a la propiedad x*/
        y,  /*Se omite y: y para asiganarle el valor 5 a la propiedad x*/
        z,  /*Lo mismo que los dos casos anteriores pero para la z*/
        mostrarCoordenada() {
            console.log(`(${this.x},${this.y},${this.z})`);
        }
    }

    coordenada1.mostrarCoordenada();

    /*EL ANTERIOR OBJETO COORDENADA ES IGUAL QUE El siguiente */
    const coordenada2 = {
        x: x,  /*Se omite x: x para asiganarle el valor 10 a la propiedad x*/
        y: y,  /*Se omite y: y para asiganarle el valor 5 a la propiedad x*/
        z: z,  /*Lo mismo que los dos casos anteriores pero para la z*/
        mostrarCoordenada: function () {
            console.log(`(${this.x},${this.y},${this.z})`);
        }
    }
    coordenada2.mostrarCoordenada(); //misma salida que coordeanda1.mostrarCoordenada()

    const coordenada3 = {
        x: x,  /*Se omite x: x para asiganarle el valor 10 a la propiedad x*/
        y: y,  /*Se omite y: y para asiganarle el valor 5 a la propiedad x*/
        z: z,  /*Lo mismo que los dos casos anteriores pero para la z*/
        mostrarCoordenada: () => {
            console.log(`(${this.x},${this.y},${this.z})`); //Con arrow function this hace alusion a window no al objeto
        }
    }

    coordenada3.mostrarCoordenada(); 

}



/*DESESTRUCTURACION-- PROCESO INVERSO, SIRVE PARA TRANSPORTAR A CADA ELEMENTO DE UN ARREGLO O CADA ATRIBUTO DE UN OBJETO A VARIABLES INDEPENDIENTES*/


{
    /*Podemos ver esto como un estructuracion, se estructuran datos en un unico objeto persona */
    const persona = {
        nombre: "Maikel",
        apellidos: "luis gonzalez",
        edad: 25,
        correo: "maikel@gmail.com"
    }

    const { nombre, apellidos, edad, correo } = persona;  //No es necesario mencionar todos los campos de la clase, se cogen aquellos que interese, la concordancia es nominal, tampoco importa el orden en el que se mencionen
    //en este punto hemos descompuesto (desestructurado) el objeto persona en 4 variables (tiene que haber equivalencia nominal entre nombre de atributos de clase y nombre de variables a las que se asignan sus valores)
    console.log(`El alumno  ${nombre} ${apellidos}, con ${edad} años, tiene el correo: ${correo}`); //Se aprecia que no se accede al valor de los atributos con persona.nombre, persona.apellidos, si no que se han creado variables

    const array = [1, 2, 3, 45, 67, 6, 45, 3, 4534, 34534, 45, 4677, 6]; 
                 //a  b  c   d  e   f   g  h
    const [a, b, c, d, e, f, g, h] = array; //la asignacion va por orden, de van guardando en la variable a el primer elemento, y asi sucesivamente, da igual el nombre que se ponga a la variable
    console.log(a, b, c, d, e, f, g, h); 


}

