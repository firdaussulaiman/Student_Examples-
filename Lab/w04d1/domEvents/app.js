console.log("DOM Events");

const btn = document.querySelector("#btn");
const anotherBtn = document.getElementById("another-btn");

const mainContainer = document.querySelector("#main-container");
mainContainer.addEventListener("click", (event) => {
  console.log("Main Container is clicked!");
  event.stopPropagation();
  console.log("Main container: Target is ", event.target);
  console.log("Main container: CurrentTarget is ", event.currentTarget);
});

document.body.addEventListener("click", (event) => {
  console.log("BODY is clicked!!");
  console.log("Body: Target is ", event.target);
  console.log("Body: CurrentTarget is ", event.currentTarget);
});

for (let i = 1; i <= 100; i++) {
  const dynamicDiv = document.createElement("div");
  dynamicDiv.classList.add("clickable");
  dynamicDiv.setAttribute("id", "dynamic-div-" + i);
  dynamicDiv.innerText = `Id: ${i}`;
  dynamicDiv.addEventListener("click", (event) => {
    console.log(`${event.target.id} is clicked..`, event);
    event.stopPropagation(); // prevents bubbling
    const targetElement = document.querySelector(`#${event.target.id}`);
    //console.log("targetElement:", targetElement);
    targetElement.style.backgroundColor = "black";
    targetElement.style.color = "aqua";
  });
  mainContainer.appendChild(dynamicDiv);
}

const addText = (nameBtn = "a") => {
  console.log(`${nameBtn} button was clicked!!!`);
  mainContainer.appendChild(
    document.createTextNode(`It seems like ${nameBtn} button has been clicked!`)
  );
};

btn.addEventListener("click", () => {
  addText("primary");
  console.log("primary button is clicked");
});

anotherBtn.addEventListener("mouseout", () => addText());
