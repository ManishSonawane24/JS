// var c = 300;

// let a = 100;
// let b = 200;
// if(true) {
//     let a = 10;
//     var d = 400;
//     c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }

// console.log(a);

function one() {
    username = "manish"

    function two() {
        const password = "password"
        console.log(username)
    }
    // console.log(password);
    two()
}
    
// one()

function addOne(num){
    return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}
addTwo(5)
const user = {
    username: "manish",
    price: 999,

    welcome: function () {
        console.log(`Welcome ${this.username} just logged in`);
    }
};
