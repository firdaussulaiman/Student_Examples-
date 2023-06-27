document.addEventListener("DOMContentLoaded", function () {
  let imageUrls = [
    "https://m.media-amazon.com/images/I/41I7nHWrMGL._AC_SY1000_.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/ocean-quotes-index-1624414741.jpg",
    "https://www.science.org/do/10.1126/science.aax8231/abs/wave_16x9.jpg",
    "https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1142330016.jpg",
    "https://www.malibumakos.com/wp-content/uploads/2018/07/ocean-waves-1000x675.jpg",
  ];

  let squareDiv = document.querySelector(".square-div");
  let imageContainer = document.getElementById("image-container");

  squareDiv.addEventListener("click", function () {
    let randomImageUrl =
      imageUrls[Math.floor(Math.random() * imageUrls.length)];
    let imageElement = document.createElement("img");
    imageElement.src = randomImageUrl;
    imageElement.style.width = "100px";
    imageElement.style.height = "100px";
    imageElement.style.marginRight = "10px";
    imageContainer.appendChild(imageElement);
  });
});
