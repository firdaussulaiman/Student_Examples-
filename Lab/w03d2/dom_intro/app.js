console.log("Welcome to W03D2 class..");

// DOM manipulation is about dynamically change contents on the web page
document.querySelector("h1").innerText = "Welcome to W03D2 class!";

// query and store another element
const image = document.querySelector("img");
image.style.width = "30%";
image.style.filter = "grayscale(100%)";

// create new element
const anotherH2 = document.createElement("h2");
anotherH2.innerText = "This is SEIF-14.";

// append the new element to the DOM
document.querySelector(".container").appendChild(anotherH2); // query by class

// remove an element
setTimeout(() => {
  anotherH2.remove();
}, 5000);

const allListItems = document.querySelectorAll("li"); // query by tag
allListItems[0].innerText = "James";
allListItems[1].style.color = "red";

const studentHeader = document.querySelector("#student-header"); // query ID
studentHeader.innerText = "The list of our students";
