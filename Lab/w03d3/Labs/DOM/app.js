const generateQuilt = (numSquares) => {
  const quiltContainer = document.getElementById("quilt-container");

  for (let i = 1; i <= numSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("quilt-square");
    square.style.backgroundColor = randomColor();
    quiltContainer.appendChild(square);
  }
};

const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

document.addEventListener("DOMContentLoaded", () => {
  generateQuilt(1000);
});

/*const generateQuilt = () => {
  
};*/
