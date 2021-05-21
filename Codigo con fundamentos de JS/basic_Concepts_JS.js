
/*===COLOCACION DEL CODIGO JAVA SCRIPT===*/
// El codigo java puede localizarse en tres diferentes zonas:
   //1. En un fichero externo con extension .js
     // <script src= "Ruta relativa con nombre de archivo"></script> Ej <script src="CarpetaCodigoJScript/funcionesBasicas.js"></script>
   //2. Dentro del head del codigo html
  //3. En cualquier punto del body del codigo html
  //NOTA: La interpretación es de arriba hacia abajo, donde se ponga el script es como copiar y pegar el codigo en ese punto

/*PALABRAS RESERVADAS JAVA SCRIPT */
// var : declaracion de variable
//true, false: valores de booleanos.

/*  <-Inicio comentario de bloque
   //Comentarios de linea
 Fin comentario de bloque -> */

/*TIPOS DE DATOS PRIMITIVOS

    string - cadena de texto entre comillas dobles o simple. Ej "Hola mundo"
    number - numero
    boolean - verdadero o falso
    null - no puntero a memoria (asignado por programador)
    undefined - variable declarada pero sin valor (se asigna automaticamente)
    NaN - Not a Number, no equivalencia de tipos 
*/


/*Los nombres de la variables solo pueden empezar por letra, signo dollar o guion bajo*/
/*No puede haber duplicacion NOMINAL de nombre de variables*/
{ 
     let z,v,w; //Variables sin especificar su tipo, valor por defecto sera: undefined
     let x = 3; //declaracion de un numero
     let cadena = "Hola mundo"; //Declaracion de una cadena
     let boolean = true; //Declaracion de booleano
     let $Hola = "Hola"
     let numero = 5, letra = 'x', booleano2 = true;
 }


/*OPERADORES BASICOS*/
//Aritmeticos = + - * / %(mod) 
//Comparacion > < >= <= = == ===
//Comparacion = (asignacion)
//== (comparacion de valor) 
// 7 == 7 true -> "77" = 77 true; //MALA PRACTICA
//=== (comparacion de tipo y valor)  //BUENA PRACTICA

/*===LOGICOS====
 && (and)
 ||(or)
 !(not) 
 */
/*
 * (TRUE && TRUE) = TRUE; (TRUE && FALSE) = FALSE; (FALSE && TRUE) = FALSE; (FALSE && FALSE) = FALSE
 * (TRUE && UNDEFINED) = UNDEFINED
 * 
 * (TRUE || ANYTHING) = TRUE ; (FALSE || FALSE || FALSE) = FALSE
 * (TRYE || UNDEFINDED) = TRUE
 * 
 Incremento a++; primero expresion luego se suma
 asignacion e incremento ++a; Operador se evalua antes de realizar la asignacion
 */

{
    let x = 10; 
    console.log(x++); //Esto imprime el numero 10 y luego incrementa x en una unidad (evalua expresion luego actualiza)
    console.log(x); //Esto imprime el numero 11, porque en la anterior sentencia se actualizo
    console.log(++x); //Esto imprime el numero 12, Esto primero suma 1 a la variable x y luego la ilustra
    
}


{
     let suma = 4 + 5;
     let multiplicacion = 9 *2;
     let divison = 5/2;
     let resta = 9 -10;
     let combinacion = (3*6)-10;
     let cocatenacion_cadenas = "Hola" + " Mundo";
}

/*
    Let x = 3 // Declaracion de bloque o local (lo que este entre llaves)
    var y = 5 // declaracion global en el ambito window (window es el ambito global del documento)

*/

 var nombre = "Maikel"; 

 {
    let nombre = "Pepe"
     console.log("Nombre dentro de bloque es: " + nombre);
 }

 console.log("Nombre fuera de bloque es: "+ nombre);



 /*CONSTANTES*/

 const x = 10;  //Sobre valores primitivos no permite alterar su valor en un futuro
 console.log(window); 

 const persona ={
     nombre: "maikel", 
     edad: 23
 }

 //con objetos y arreglos se podran alterar los valores sin problema