// unique values

const menu = [
  { name: "pancakes", category: "breakfast" },
  { name: "burger", category: "lunch" },
  { name: "steak", category: "dinner" },
  { name: "bacon", category: "breakfast" },
  { name: "eggs", category: "breakfast" },
  { name: "pasta", category: "dinner" },
  //   { name: "", category: "" },
]; 

// map - get all instances
// new set - narrow down
// ['all',...] - turn it back to array

// this way it's object
// const cataegories = new Set(menu.map((item) => item.cataegory));

// this way it's array
const categories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categories);

const result2 = document.querySelector(".unique");
result2.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join("");
