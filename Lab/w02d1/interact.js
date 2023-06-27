console.log("Interact!");

const consoleLogMessages = (msg) => {
  console.log(msg);
};

let userInput = "";
while (userInput !== "stop") {
  userInput = prompt("Have you had your lunch yet?");
  console.log(userInput);

  if (userInput === "yes") {
    consoleLogMessages("Excellent!");
  } else {
    consoleLogMessages("Please go and have your lunch!");
  }
}

console.log("Exiting our program...");
