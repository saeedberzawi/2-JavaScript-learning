// filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// find - returns single instance (object),returns first match, if no match - undefined

const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];
const fruits = ["orange", "lemon", "apple"];

// filter
const youngPeople = people.filter((person) => {
  //   if (person.age < 30) {
  //     return person;
  //   }
  return person.age < 30;
});
console.log(youngPeople);
// -
const developers = people.filter((person) => {
  if (person.position === "developer") {
    return person;
  }
});
console.log(developers);

// no match
const seniorDevs = people.filter((person) => person.position === "senior dev");
console.log(seniorDevs);

// find
const peter = people.find((person) => person.name === "peter");
console.log(peter);
// - with string
const fruit = fruits.find((fruit) => fruit === "lemon");
console.log(fruit);

// no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

// multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

const anna = people.filter((person) => person.name === "anna");
// find
console.log(peter.position);
// filter
console.log(anna[0].position);
