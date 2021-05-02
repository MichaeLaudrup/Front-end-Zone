
//ASSIGNEMENTS JAVASCRIPT COURSE FROM ZERO TO EXPERT UDEMY 


/*LECTURE: VALUES AND VARIABLES
1.Declare variables called 'country', 'continent'and 'population'and assign their values according to your own country(population in millions)
2.Log their values to the console
*/
let country = "Spain"; 
let continent = "Europe"; 
let population = 45000000; 

let textToPrint = `In the continent ${continent} there are a country called ${country}, which have a population of ${population} in 2021`; 
console.log(textToPrint); 

/*LECTURE: DATA TYPES 
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable 
'language', but don't assign it any value yet 
2. Log the types of 'isIsland', 'population', 'country' and 'language' 
to the console 
*/

let isIsland = false; 
let language; 
textToPrint = `Type of variable "country" is ${typeof country} \nType of variable "population" is ${typeof population}\nType of variable "isIsland" is ${typeof isIsland}\nType of variable "language" is ${typeof language}`;   
console.log(textToPrint); 

/*LECTURE let, const and var 
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one) 
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const. 
3. Try to change one of the changed variables now, and observe what happens 
*/

language = "Spanish"; 
const PI = 3.141516; 
const yearOfBirth = 1994; 
//PI = 2;  ---------->//Uncaught TypeError: invalid assignment to const 'PI'

/*LECTURE 5: Basic Operators
    1. If your country split in half, and each half would contain half the population, 
    then how many people would live in each half? 
    2. Increase the population of your country by 1 and log the result to the console 
    3. Finland has a population of 6 million. Does your country have more people than 
    Finland? 
    4. The average population of a country is 33 million people. Does your country 
    have less people than the average country? 
    5. Based on the variables you created, create a new variable 'description' 
    which contains a string with this format: 'Portugal is in Europe, and its 11 million 
    people speak portuguese'
*/
const populationFinland = 6*(10**6); 
const populationAverage = 33000000; 
console.log("Population/2 --> " + population/2);
console.log("Population++ --> " + population++); 
console.log("Does your country have more people than Finland? --> "+ (population > populationFinland )) ; 
console.log("Does your country have less people than the average country? -->" + (population < populationAverage)); 
textToPrint = country + " is in " + continent + ",and its " + (population/(10**6)).toFixed() + " million people speak " + language; 
console.log(textToPrint ); 

/*LECTURE: Strings and Template Literals 
    1. Recreate the 'description' variable from the last assignment, this time 
    using the template literal syntax
*/
textToPrint = `${country} is in ${continent},and its ${(population/(10**6)).toFixed()} million people speak ${language}` 

/* LECTURE: Taking Decisions: if / else Statements 
    1. If your country's population is greater that 33 million, log a string like this to the 
    console: 'Portugal's population is above average'. Otherwise, log a string like 
    'Portugal's population is 22 million below average' (the 22 is the average of 33 
    minus the country's population) 
    2. After checking the result, change the population temporarily to 13 and then to 
    130. See the different results, and set the population back to original
*/
population = 11000000
let result; 
if(population > 33*(10**6)){
    result = 'above'; 
}else{
    result = ((33*(10**6) - population)/(10**6)).toFixed()+' million below'
}
textToPrint = `${country}'s population is ${result} average`; 
console.log(textToPrint); 

/*



*/ 