// Important methods and operations used for arrays in JS

// creating an array
let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

// indexing
console.log(myArray[0]);
console.log(myArray[myArray.length - 1]);

// modifying elements
myArray[0] = 100;
console.log(myArray);

// adding elements
myArray.push(6);
console.log(myArray);

myArray.unshift(0);
console.log(myArray);

// removing elements
myArray.pop();
console.log(myArray);

myArray.shift();
console.log(myArray);

// finding elements
console.log(myArray.indexOf(3));
console.log(myArray.includes(3));

// looping through an array
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// looping through an array using for of
for(let element of myArray) {
    console.log(element);
}

// looping through an array using for each
myArray.forEach(element => {
    console.log(element);
});

// reducing an array
let sum = myArray.reduce((total, element) => {
    return total + element;
}, 0);
console.log(sum);

// mapping an array
let double = myArray.map(element => {
    return element * 2;
});
console.log(double);

// filtering an array
let even = myArray.filter(element => {
    return element % 2 === 0;
});
console.log(even);

// finding an element in an array
let found = myArray.find(element => {
    return element === 3;
});
console.log(found);

// finding the index of an element in an array
let index = myArray.findIndex(element => {
    return element === 3;
});
console.log(index);

// joining an array
let str = myArray.join(' , ');
console.log(str);

// reversing an array
let reversed = myArray.reverse();
console.log(reversed);

// sorting an array
let sorted = myArray.sort((a, b) => {
    return a - b;
});
console.log(sorted);

// slicing an array
let sliced = myArray.slice(1, 3);
console.log(sliced);


// slice example
// slice method returns a shallow copy of a portion of an array into a new array object
let fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];
let slicedFruits = fruits.slice(1, 4); // extracts from index 1 to 3
console.log(slicedFruits); // Output: ['banana', 'orange', 'mango']

// splice example
// splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
let numbers = [1, 2, 3, 4, 5];
let removedNumbers = numbers.splice(2, 2, 6, 7); // removes 2 elements starting from index 2 and adds 6, 7
console.log(numbers); // Output: [1, 2, 6, 7, 5]
console.log(removedNumbers); // Output: [3, 4]

