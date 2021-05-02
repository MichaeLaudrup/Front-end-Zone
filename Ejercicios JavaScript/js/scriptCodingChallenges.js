
//CODING CHALLENGES JAVASCRIPT COURSE FROM ZERO TO EXPERT UDEMY (2021)
console.log("====================JAVACRIPT FROM ZERO TO EXPERT: CODING CHALLENGES ====================");
/* /*CODING CHALLENGE NUMBER ONE */
const numMaxOfChallenges = 60; 
const codingChallenges = new Array(numMaxOfChallenges);
codingChallenges[0] = `Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in and height in meter). 
Your tasks: 
    1. Store Mark's and John's mass and height in variables 
    2. Calculate both their BMIs using the formula (you can even implement both 
    versions) 
    3. Create a Boolean variable 'markHigherBMI' containing information about 
    whether Mark has a higher BMI than John.`; 

const markBMI = (78 / 1.79 ** 2); 
const johnBMI = (100 / (1.90 * 1.90)); 
let markHigherBMI = (markBMI > johnBMI); 
textToPrint = `The mark BMI is: ${markBMI.toFixed(2)}
The John BMI is: ${johnBMI.toFixed(2)}
is Mark BMI higher than John BMI?: ${markHigherBMI}`; 
console.log(textToPrint); 

CODING
