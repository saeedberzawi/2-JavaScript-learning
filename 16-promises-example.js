// .first-p - after 1s first red
// .second-p - after 3s second blue
// .third-p - after 2s third green
// IN SEQUENCE !!!

const btnf = document.querySelector(".btn-p");

btnf.addEventListener("click", () => {
  addColor(1000, ".first-p", "red")
    .then(() => addColor(3000, ".second-p", "blue"))
    .then(() => addColor(2000, ".third-p", "green"))
    .catch((err) => console.log(err));
});

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`There is no such element : "${seclcotr}"`);
    }
  });
}
