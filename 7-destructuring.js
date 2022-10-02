// faster/easier way to access/unpack variables from arrays

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

// -

const [enemy, , bob, , kelly, susan] = friends;

console.log(enemy, bob, kelly, susan);

// --

let first = "bob";
let second = "john";
// - way 1
// let temp = second;
// second = first;
// first = temp;

// console.log(first, second);

// - way 2
[second, first] = [first, second];
console.log(first, second);
