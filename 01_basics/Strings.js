let name = "manish";
var age = 25;
let isStudent = true;   
const marks = 75.5;
let subjects = ["Maths", "Science", "English"];


console.log(`Hello my name is ${name} and I am ${age} years old and I have scored ${marks} marks in my exams.`);

const gameName = new String("pubg");

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

const gameName1 = gameName.substring(1, 3);
console.log(gameName1);

const gameName2 = gameName.slice(1 , 3);
console.log(gameName2);

const gameName3 = "   Manish    ";
console.log(gameName3.trim());
