// rest operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when inovke the function

// array
const fruits = ["apple", "orange", "lemon", "bannana"];
const [first, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === "lemon");
console.log(specificFruit);

// objects
const person = { name: "john", lastName: "smith", job: "developer" };
// const {...rest,job} = person
// سوف يكون خطا لان ريست تاخذ باقي القيم
const { name, ...rest } = person;
console.log(name, rest);

// functions

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

const testScores = [23, 45, 67, 89];
getAverage(person.name, ...testScores);
