// const colors = ["green", "red", "blue"];

// const btn = document.querySelector('.btn')
// const color = document.querySelector('.color')

// btn.addEventListener('click', function () {
//   const index = getRandomNumber();
//   document.body.style.backgroundColor = colors[index];
//   color.textContent = colors[index];
// })

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C"];
const btn = document.querySelector('.btn')
const color = document.querySelector('.color')



btn.addEventListener('click', function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor
})

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
