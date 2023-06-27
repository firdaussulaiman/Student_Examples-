$(document).ready(() => {
  for (var i = 0; i < 64; i++) {
    const square = $("<div>").addClass("square");
    $("#grid-container").append(square);
  }

  // Add the checkerboard class to the grid container
  $("#grid-container").addClass("checkerboard");
});
