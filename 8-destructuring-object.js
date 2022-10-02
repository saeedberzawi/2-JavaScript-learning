const bob = {
  first: "bob",
  last: "sanders",
  city: "chicage",
  siblings: {
    sister: "jane",
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);

const {
  first,
  last: shakeAndBake,
  city,
  siblings: { sister: favoriteSibling },
} = bob;
console.log(first, shakeAndBake, city, favoriteSibling);

function printPerson({ first, last, city, siblings: { sister } }) {
  console.log(first, last, city, sister);
}

printPerson(bob);
