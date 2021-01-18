

/*IF-ELSE: Dependiendo de una condicion se debe realizar una accion u otra*/

{
    let precio = 100;
    let precioFinal;
    let descuentoJoven = 0.5;
    let descuentoAdulto = 0.3;
    let edad = 60;
    if (edad > 30) {
        precioFinal = precio - (precio * descuentoAdulto);
    } else {
        precioFinal = precio - (precio * descuentoJoven);
    }

    console.log(`Para la edad ${edad} se aplica un precio de ${precioFinal}`);
    if (edad < 18) {
        console.log(`No puede adquirir este producto porque es menor de 18`);
    } else if (edad >= 18 && edad <= 65) {
        console.log(`Segun el sistema de trabajo de españa, usted esta en edad laboral, le insertaremos en nuestra base de datos como personas solventes para venderle mas productos`);
    } else {
        console.log(`Le regalamos el producto porque nos gusta cuidar de nuestros mayores`); 
    }

    //OPERADOR TERNARIO
    let esMayorDeEdad = (edad > 18) ? "Es mayor de edad" : "No es mayor de edad"; 

}

/*SWITCH- CASE*/

{
    let diaSemana = "lunes";
    switch (diaSemana) {
        case "lunes":
            console.log("Empieza el dia con un cafe"); 
            break; 
        case "martes":
            console.log("Nada"); 
            break; 
        case "miercoles":
            console.log("llevar a tu hijo al colegio"); 
            break; 
        case "jueves":
            console.log("Trabajar en casa"); 
            break;
        case "viernes":
        case "sabado": 
        case "domingo":
            console.log("A descansar"); 
            break; 
        default:
            console.log("Usted vive en otro planeta porque el dia de la semana especificado no existe");

    }

}

/*BUCLES REPETITIVOS */
{
    let condicion = false;
    while (condicion) {


    }

    do { } while (condicion); 

    for (let i = 1; i < 10; i++) {
    }
    let personas = {
        edad: 26,
        altura: 1.79,
        Nombre: "Michael"
    }


    for (const propiedad in personas) {
        //Va recorriendo cada una de las propiedades de un objeto
        console.log(personas[propiedad]);
    }

    let coleccion = [1, 2, 3, 4, 5, 67, 8, 9]; 
    for (let iterador of coleccion) { //itera tanto objetos como arreglos, strings
        console.log(iterador); 
    }

    //en caso de romper un bucle se usa break;
    //en caso de querer continuar a la siguiente iteracion de un bucle seria continue
}

{
    /*
    try {
        // aqui se intenta ejecutar un codigo, en caso de error se lanzara un throw exception
    } catch (error) {
        // aqui se recoge la excepcion y se informa al usuario del tipo de erorr y se especifican el tipo de acciones a efectuar
    } finally {
        //este codigo se ejecuta haya o no haya error.
    }
    */


}
