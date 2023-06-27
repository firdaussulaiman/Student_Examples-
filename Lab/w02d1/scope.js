console.log("Scope!");

const defaultValue = 1000; // global/outer scope

const exampleFunction1 = () => {
  // block scope
  const num = 100 + defaultValue; // local scope
  console.log(num);
  return num;
};

const exampleFunction2 = () => {
  const num = 200 + defaultValue; // local scope
  console.log(num);
  return num;
};

const exampleFunction3 = () => {
  const num = 300 + defaultValue; // local scope
  console.log(num);
  return num;
};

// const num1 = exampleFunction1();
// const num2 = exampleFunction2();
// const num3 = exampleFunction3();

// console.log(num1 + num2 + num3);

// console.log(num); // Error: num is not defined

// more example of block scope
/*
let forNum = 0; // create forNum outside for loop and hence outer scope
for (let i = 0; i < 10; i++) {
  // block scope
  forNum += 100 + defaultValue; // can access outer scope variable
  console.log("for loop " + i, forNum);

  // more example of block scope
  if (i === 1) {
    // block scope or inner scope
    const ifNum = 100 + defaultValue + forNum; // local scope and it is able to access outer scope variables
    console.log("if statement", ifNum);
  }
  // forNum = forNum + ifNum; // Error: trying to access inner scope variable
}
*/

/*
const exampleFunction4 = () => {
  // block scope
  const num = 100 + defaultValue; // local scope
  console.log(num);
  return num;
};

const exampleFunction5 = () => {
  const num = 200 + defaultValue + exampleFunction4(); // local scope
  console.log(num);
  return num;
};

exampleFunction5();
*/
let lunch = "";
if (true) {
  // always run
  lunch = "rice with vegetables"; // not leaking scope
  //console.log(`I am having ${lunch} for lunch.`); // template literals is more readable
}

if (true) {
  // always run
  const lunch = "noodles with vegetables"; // not leaking scope
  //console.log(`I am having ${lunch} for lunch.`); // template literals is more readable
}

if (true) {
  // always run
  let lunch = "rice with meat"; // not leaking scope
  //console.log(`I am having ${lunch} for lunch.`); // template literals is more readable
}

console.log("I am having " + lunch + " for lunch."); // also works
