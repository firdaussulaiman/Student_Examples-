$(document).ready(() => {
  const generatePyramid = (tiers) => {
    let pyramidContainer = document.getElementById("pyramid-container");
    pyramidContainer.innerHTML = "";

    for (let i = 1; i <= rows; i++) {
      let row = document.createElement("div");
      row.classList.add("pyramid-row");

      for (let j = 1; j <= i; j++) {
        let triangle = document.createElement("div");
        triangle.classList.add("pyramid-triangle");
        row.appendChild(triangle);
      }

      pyramidContainer.appendChild(row);
    }
  };

  // Example usage:
  generatePyramid(16);
});
