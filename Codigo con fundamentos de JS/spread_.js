//Spread operator : SOLO FUNCIONA en funciones o en arreglos o en lugares donde se pueda recibir elementos separados por comas.

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
//console.log(badNewArr); // SALIDA: (5)[1,2,7,8,9]

const spreadNewArray = [1, 2, ...arr];
//console.log(spreadNewArray); //SALIDA:  (5)[1,2,7,8,9]

//Union de dos arrays
const menu1 = ["ensalada con champiñones", "pechuga de pollo"];
const menu2 = ["papafritas con hamburguesas", "croquetas"];
const fusionMenus = [...menu1, ...menu2, "chuletas"];

//Copiar un array
const fusionCopia = [...fusionMenus];

//Funcion con un array de parametros

function orderPasta(ing1, ing2, ing3) {
  console.log(
    ` Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
  );
}

const ingredients = ["tomato", "cheese", "chicken"];
//orderPasta(...ingredients); //Salida: Here is your delicious pasta with tomato, cheese and chicken

//Con enmaEscript 2018 se inserto la posibilidad de utilizar el spread con objetos
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};

nuevoRestaurante = { ...restaurant, miPropioAtributo: 1, miPropioAtributo: 2 }; //NO SE COPIAN POR REFERENCIA
