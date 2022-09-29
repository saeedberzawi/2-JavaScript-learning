// map

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "anna", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  {
    name: "john",
    age: 26,
    position: "intern",
  },
];

// quokka.js - extension
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

// outside map
const getAges = (person) => person.age;

const ages = people.map(getAges);
console.log(ages);
// inside map
const names = people.map((person) => person.name);
console.log(names);

//
const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

const name = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector("#result");
result.innerHTML = name.join('');
