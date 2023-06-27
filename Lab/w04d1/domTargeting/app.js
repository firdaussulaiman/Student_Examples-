console.log("Oh hey, I remember something like this");

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      console.log("click event", event.currentTarget);
      event.currentTarget.classList.toggle("card-back"); // css class
    });
  });
});
