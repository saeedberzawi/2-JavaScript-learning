// do notation
const person = {
  name: "john",
};
console.log(person.name);
person.age = 25;
console.log(person);
person.title = "boss";
console.log(person);

// square bracket notation

const items = {
  "featured-itmes": ["item1", "item2"],
};
console.log(items["featured-itmes"]);
console.log(person["name"]);

//
let appState = "loading";
const keyName = "computer";
const app = {
  [appState]: true,
};
app[keyName] = "apple";
console.log(app);

//

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "john");
updateState("job", "developer");
updateState("loading", "false");
updateState("products", []);

console.log(state);
