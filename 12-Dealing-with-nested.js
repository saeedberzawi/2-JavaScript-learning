const people = [
  {
    name: "bob",
    location: { street: "123 main street", timezone: { offset: "+7:00" } },
  },
  {
    name: "peter",
    location: { street: "123 Pine street" },
  },
  {
    name: "susan",
    location: { street: "123 Apple street", timezone: { offset: "+9:00" } },
  },
];

people.forEach((person) => {
  // console.log(person.name);
  // console.log(person.location.timezone.offset); => Error
  // console.log(
  //   person.location &&
  //     person.location.timezone &&
  //     person.location.timezone.offset
  // ); => long way
  console.log(person?.location?.timezone?.offset || "hello world");
  // for the peter offset unkown => || "hello world" <= will be the default value
});

console.log(true && "hello");
console.log(false && "hello");
