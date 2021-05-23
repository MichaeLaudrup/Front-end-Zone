/*******************************************************************************
          SECCION DE ABREVIACIONES: Esta seccion busca ahorrar tener que escribir
          elementos 
*********************************************************************************/
//================================================================================
//Se puede declarar un if sin llaves si solo es de una linea, por ejemplo:
if (a > b) console.log("A es mayor que B");
//================================================================================*/
//Con el bucle for si solo se trata de una instruccion por vuelta del bucle se pueden omitir llaves tambien
let x = 0;
for (let i = 1; i <= 10; i++) x += i;
let y = x; //Esta linea ya no pertenece al bucle for sin necesidad de llaves.

/******************************************************************************
 *        SECCION INTERACCION DE JS CON EL DOM (Document Object Model)
 * ****************************************************************************/
// ===============================================================================
// Se puede eliminar, insertar y reemplazar valores del atributo "class" de cada
// elemento HTML con la operacopm classList.remove(), classList.add(), classList.replace()
// respectivamente. Por ejemplo:
const miElementoHTML = document.querySelector("NombreElementoHTMLBuscado");
miElementoHTML.classList.add("claseNueva");
miElementoHTML.classList.remove("claseNueva");
// ===============================================================================
//Cuando se inserta un add eventListener en un determinado elemento del DOM y se
// quiere llamar a una funcion externa como manejador del evento, no podemos enviar
// parametros personalizados desde los parametros de addEventListener, i.e;
document.addEventListener("keydown", funcionExterna); // no se puede hacer funcionExterna(misPropiosParametros)
function funcionExterna(a) {
  //a sera un objeto del tipo de evento que se haya generado con info sobre el evento, peroo no podemos mandar parametros
  x = a; //personalizados
}

//================================================================================
//En la declaracion de objetos se pueden llamar a funciones para asignar valores a
//los atributos del objeto, ejemplo:

const persona = {
  nombre: prompt("Dame tu nombre..."),
  edad: 25,
};
//================================================================================

//Para activar directamente el debuggeador en un punto determinado sin tener que hacer en el navegador se pone la sentencia "debugger;", al llegar el interprete a esta sentencia, parara la ejecucion y activara el modo depuracion del navegador, como si de meter un breakpoint con inicio automatico de depurador en el script se tratara.
//================================================================================
