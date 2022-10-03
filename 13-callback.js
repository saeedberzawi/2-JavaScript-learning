function makeUppercase(value) {
  console.log(value.toUpperCase());
}
makeUppercase("john");

function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, cb) {
  const fullName = `${name} alberzawi`;
  cb(fullName);
}

// -- in this way will be wrong so we use => Callback function
// handleName('peter',makeUppercase())

handleName("saeed", makeUppercase);
handleName("saeed", reverseString);

// -
// set the function into the direct line

handleName("majeda", (value) => console.log(value));

// array method, setTimeout, event listeners etc
