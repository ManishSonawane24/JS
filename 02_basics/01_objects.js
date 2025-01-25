

const mySym = Symbol('key1');

const user = {
    name: "manish",
    age: 25,
    "full name": "manish kumar",  
    [mySym]: "mykey1",
    gender: "male",     
    address: "Chopda",
    "email": "p9D9g@example.com",
    "isLoggedIn": false,
    lastLoginDays: ['monday', 'tuesday', 'wednesday'],
};

console.log(user.name);
console.log(user["name"]);
console.log(user["full name"]);
console.log(user[mySym]);
console.log(user);

user.email = "z7R2h@example.com";
// Object.freeze(user);
user.isLoggedIn = true;
console.log(user);

user.greetings = function() {
    console.log(`Hello user, ${this.name} `);
};

console.log(user.greetings());