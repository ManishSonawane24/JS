const tinderUser = new Object();
console.log(tinderUser);
tinderUser.name = "manish";
tinderUser.age = 25;
tinderUser.isLoggedIn = true;       
console.log(tinderUser);

const regulerUser = {
    fullname:{
        firstName: "manish",
        lastName: "kumar",
    }
}
console.log(regulerUser);

const obj1 = {1:'a', 2:'b', 3:'c'};
const obj2 = {4:'a', 5:'b', 6:'c'};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const obj4 = {...obj1, ...obj2};
console.log(obj4);
// array of objects
const users2 = [
    {
        id: 1,
        name: "manish",
    },

    {
        id: 2,
        name: "kumar",
    },
    
    {
        id: 3,
        name: "manish kumar",
    }
];

users2[0].name = "manish kumar";
console.log(users2[0].name); 

