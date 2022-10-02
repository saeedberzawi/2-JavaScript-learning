// spread operator...
// allows and iterable to spread/expand individually inside reciever
// split into single items copy them

const udemy = "udemy";
const letters = [...udemy];
console.log(letters);
console.log(...udemy);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const friends = [...boys, bestFriend, ...girls];
console.log(friends);

// reference
// const newFriends = friends;
// copy
// with array => [...]
const newFriends = [...friends];
newFriends[0] = "nancy";
console.log(friends);
console.log(newFriends);

// ES2018 - ES8 objects

const person = { name: "john", job: "developer" };

// with object => {...}
const newPerson = { ...person, city: "chicago" };
console.log(person);
console.log(newPerson);
const newName = { ...newPerson, name: "peter" };
console.log(newName);
