const user = {
    username: "manish",
    price: 199,
    welcome: function () {
        console.log(`Welcome ${this.username} to this website`);
        //console.log(this); //{username: "manish", price: 199, welcome: ƒ}
        
    }
}

user.welcome();
//console.log(this);//{}empty object

// arrow function 
const chai = () => {
    console.log("chai is ready");
    //console.log(this);//empty object
}

chai()

// const addTwoNumbers = (a, b) => {
//     return a + b
// }

const addTwoNumbers = (a, b) => (a + b)

console.log(addTwoNumbers(10, 20));

