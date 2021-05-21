const coordenada3 = {
    x: x,  /*Se omite x: x para asiganarle el valor 10 a la propiedad x*/
    y: y,  /*Se omite y: y para asiganarle el valor 5 a la propiedad x*/
    z: z,  /*Lo mismo que los dos casos anteriores pero para la z*/
    mostrarCoordenada: () => {
        console.log(`(${this.x},${this.y},${this.z})`); //Con arrow function this hace alusion a window no al objeto
    }
}

coordenada3.mostrarCoordenada(); 