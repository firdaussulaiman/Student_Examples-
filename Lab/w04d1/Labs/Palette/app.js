const colorPalette = document.querySelector("#color-palette");
const myPalette = document.querySelector("#my-palette");
const generateButton = document.querySelector("#generate");

const makePalette = () => {
  for (let i = 0; i < 150; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    colorPalette.appendChild(square);
  }
};

//... bottom of file
makePalette();

const makePalette = () => {
  for (let i = 0; i < 150; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    const red = Math.floor(Math.random() * 256); // Generate random red value (0-255)
    const green = Math.floor(Math.random() * 256); // Generate random green value (0-255)
    const blue = Math.floor(Math.random() * 256); // Generate random blue value (0-255)
    const color = `rgb(${red},${green},${blue})`; // Construct the RGB color string

    square.style.backgroundColor = color; // Set the background color of the square

    colorPalette.appendChild(square);
  }
};
