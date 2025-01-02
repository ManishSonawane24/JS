let marvelHeros = ["thor", "ironman", "spiderman"];
console.log("Marvel Heros: " + marvelHeros);

let dcHeros = ["batman", "superman", "wonderwoman"];
console.log("DC Heros: " + dcHeros);

// concatenation
let allHeros = marvelHeros.concat(dcHeros);
console.log(allHeros);

// spread operator 
let allHeros2 = [...marvelHeros, ...dcHeros];
console.log(allHeros);

const arr = [1, 2, 3, 4, 5,[6, 7, 8, 9],[10,[11, 12, 13]]];
console.log(arr.flat(Infinity));


// convert into array
let myString = "hello";
console.log(Array.isArray(myString));
console.log(Array.from(myString));
console.log(Array.from({name: "manish"})); // empty array

let score = 100;
let score2 = 200
let score3 = 300;
let scores = Array.of(score, score2, score3);
console.log(scores);