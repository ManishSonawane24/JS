
// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date('2021-01-01');
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate1 = new Date();
console.log(myCreatedDate1.toString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCreatedDate1.getTime());

// get it into seconds 
console.log(Math.floor(myTimeStamp / 1000));


// more methods
console.log(myCreatedDate1.toDateString());
console.log("The year is: " + myCreatedDate1.getFullYear());
console.log("The month is: " + (myCreatedDate1.getMonth() + 1));
console.log("The date is: " + myCreatedDate1.getDate());
console.log("The day is: " + myCreatedDate1.getDay());
console.log("The hours are: " + myCreatedDate1.getHours());
console.log("The minutes are: " + myCreatedDate1.getMinutes());
console.log("The seconds are: " + myCreatedDate1.getSeconds());
console.log("The milliseconds are: " + myCreatedDate1.getMilliseconds());
console.log("The time is: " + myCreatedDate1.getTime());

let myCreatedDate2 =  new Date(2024, 0, 1, 10, 30, 0);
console.log(myCreatedDate2.toLocaleString('default', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'}));
console.log(myCreatedDate2.toLocaleString('default', {month: 'long'}));
