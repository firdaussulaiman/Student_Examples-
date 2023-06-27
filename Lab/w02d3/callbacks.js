// create a function

/*
// creating function the traditional way - we want to move away from this
function displayNumber(num) {
  console.log(num);
}

// arrow function - modern JS
const displayNumberSquared = (num) => {
  // input: parameters
  // display a number
  //console.log(num);

  return num * num;
};

// to invoke a function, use the name followed by parentheses
const squaredNum = displayNumberSquared(20); // input arguments and store the returned value in squaredNum
console.log(squaredNum);
*/

/*
// callbacks
const kitchen = (cookDish) => {
  // kitchen function is Higher order function
  console.log("This is the kitchen, what can I cook for you?");
  cookDish(); // cookDish is the callback function
};

const cookFriedRice = () => {
  console.log("Cooking fried rice..");
};

const cookLaksa = () => {
  console.log("Cooking laksa..");
};

kitchen(cookFriedRice);
kitchen(cookLaksa);
*/

// Another example
/*
// callback function
const capitalise = (word) => {
  return word[0].toUpperCase() + word.substring(1);
};

// callback function
const excited = (word) => {
  return word + "!";
};

//higher order function that will call the callback function
const handleWords = (str, cb) => {
  const arr = str.split(" ");
  const newArr = [];

  for (let word of arr) {
    newArr.push(cb(word));
  }

  return newArr.join(" ");
};

const newStr = handleWords("hello class how are you all doing", excited);
console.log(newStr);

// anonymous function (function without a name)
//const anotherNewStr = handleWords("are there any questions", (word) => word + "?");
const anotherNewStr = handleWords("are there any questions", (word) => {
  return word + "?";
});
console.log(anotherNewStr);
*/

/*
setTimeout(() => {
  console.log("Say hi to everyone after 1 second has passed!");
}, 5000);
*/

const iceCreams = ["Vanilla", "Chocolate", "Strawberry", "Rocky Road"];

const updatedIceCreams = iceCreams.map((flavor) => {
  return flavor + " Ice Cream";
});

console.log(iceCreams);
console.log(updatedIceCreams);
