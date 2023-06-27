// write a function to add a H2
const addH2 = () => {
  const h2 = document.createElement("h2");
  h2.textContent = "Just getting started..";
  document.body.prepend(h2);
};

// write another function to change our H2
const changeH2 = () => {
  const h2Element = document.querySelector("h2");
  h2Element.textContent = "Getting warmed up";
};

// create a function to generate random colors
const randomColorRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

const makeSquare = (runningNumber) => {
  // each time, create a square
  const square = document.createElement("div");
  square.classList.add("square");

  // add square color to be random and white color for even number
  if (runningNumber % 2 === 0) square.style.backgroundColor = randomColorRGB();
  else square.style.backgroundColor = "white";

  // add a running number to the square
  square.textContent = runningNumber;

  // add the square to the container
  document.querySelector(".container").appendChild(square);
};

// create a function to generate the quilt
const generateQuilt = (numberOfSquares) => {
  // within the function, write a loop that goes from 1-1000
  for (let i = 1; i <= numberOfSquares; i++) {
    console.log(i);
    makeSquare(i);
  }
};

// invoke this function after the DOM content has been loaded
document.addEventListener("DOMContentLoaded", () => {
  addH2();
  changeH2();
  generateQuilt(100);
});
