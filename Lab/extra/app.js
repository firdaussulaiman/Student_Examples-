//100 Button Insanity Exercise
//Without touching index.html, please use JavaScript to create exactly 100 new button elements! Add each new button inside the container element provided in index.html.  Unfortunately, Udemy's exercise tool does not support to the append method, so you will need to use appendChild.  Here are the steps:

//Create exactly 100 new button elements
const newbutton = document.createElement("button");
//Add each new button inside the container element provided in index.html.
const container = document.querySelector("#container");
container.appendChild(newbutton);
//Unfortunately, Udemy's exercise tool does not support to the append method, so you will need to use appendChild.  Here are the steps:
//Each button must be created using JavaScript (don't copy and paste HTML code)
for (let i = 0; i < 100; i++) {
  const newbutton = document.createElement("button");
  newbutton.innerText = "button";
  container.appendChild(newbutton);
}

//Each button must have some text inside of it (it doesn't matter what)

//Each button must be appended inside the container div.

//Hint: Loop 100 times. Inside the loop, create a new empty button element.  Add some innerText to the button.  Use appendChild to add the button to the container.
