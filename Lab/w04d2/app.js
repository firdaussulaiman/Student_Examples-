console.log("W04D2!");

const list = ["Changi Airport", "Supper", "Go home"];

const renderInitialList = () => {
  // target the ul element
  const ulElement = document.querySelector("ul");
  // clear the ul element
  ulElement.innerHTML = "";

  // loop through the list
  list.forEach((item) => {
    // for each element in the list, create a li element
    const liElement = document.createElement("li");
    liElement.textContent = item;
    liElement.addEventListener("click", () => {
      liElement.style.textDecoration = "line-through";
    });

    // append the li element to the ul list
    ulElement.appendChild(liElement);
  });
};

const render = () => {
  console.log("list: ", list);

  const ulElement = document.querySelector("ul");
  const liElement = document.createElement("li");

  liElement.textContent = list[list.length - 1];
  ulElement.appendChild(liElement);

  liElement.addEventListener("click", () => {
    liElement.style.textDecoration = "line-through";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // initialise list
  renderInitialList();

  // listens for form submit event
  form.addEventListener("submit", (evt) => {
    evt.preventDefault(); // prevents the page from refreshing

    // get the input from input text box
    const inputBox = document.querySelector("#input-box");
    const inputValue = inputBox.value;
    console.log(inputValue);
    list.push(inputValue);

    form.reset();

    // add the input value to a list <ul>
    render();
  });

  //   const submitButton = document.querySelector("#submit-btn");

  //   submitButton.addEventListener("click", () => {
  //     // get the input from input text box
  //     const inputBox = document.querySelector("#input-box");
  //     const inputValue = inputBox.value;
  //     console.log(inputValue);
  //   });
});
