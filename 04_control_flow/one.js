//  control flow statements
// 1. if statement
let age = 18;   
if (age >= 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}   
// 2. if-else statement
let number = 10;
if (number % 2 === 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}
// 3. if-else if-else statement
let day = "monday";
if (day === "monday") {
    console.log("Today is Monday.");
}
else if (day === "tuesday") {
    console.log("Today is Tuesday.");
}
else if (day === "wednesday") {
    console.log("Today is Wednesday.");
}
else {
    console.log("Today is not Monday, Tuesday, or Wednesday."); 

}
// 4. switch statement
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("The fruit is an apple.");
        break;
    case "banana":
        console.log("The fruit is a banana.");
        break;
    case "orange":
        console.log("The fruit is an orange.");
        break;    
    default:
        console.log("The fruit is not an apple, banana, or orange.");
        break;
}   
// 5. for loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}   
// 6. while loop
let i = 0;
while (i < 5) {
    console.log("Iteration number: " + i);
    i++;
}
// 7. do-while loop
let j = 0;
do {
    console.log("Iteration number: " + j);
    j++;
}
while (j < 5); // Closing the do-while loop
// 8. break statement'

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log("Iteration number: " + i);
}

// Falsy values in JavaScript
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN (Not a Number)
// 9. continue statement
// 10.BIGINT

// truthy values in JavaScript
// 1. true
// 2. any number (except 0)
// 3. non-empty strings
// 4. objects (including arrays)
// 5. functions
// 6. any non-zero value
// 7. symbols
// 8. BigInt (except BigInt(0))
// 9. Infinity and -Infinity
// 10. any non-null value
// 11. arrays (even empty arrays)
// 12. objects (even empty objects)
// 13. user-defined objects
// 14. any non-zero BigInt value
// 15. any non-null reference
// 16. any non-empty string
// 17. any non-zero number (including negative numbers)
// 18. any non-empty array
// 19. any non-empty object