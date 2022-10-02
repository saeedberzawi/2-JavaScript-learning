// array.from - not on prototype

// from - returns array object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodelist, set

const udemy = "udemy";

// console.log(Array.from(udemy));

const text = document.querySelectorAll(".text");

const newText = Array.from(text).find((item) => item.textContent === "person");

console.log(newText);

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});

console.log(items);

// const itemsPerPage = 10;
// const pages = items.length / itemsPerPage;

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);

console.log(pages);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
});

console.log(pages);
