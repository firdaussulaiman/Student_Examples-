console.log("Objects!");

const student = {
  name: "Zach", // key-value pairs or properties the object might have
  age: 28,
  completedHomework: true, // keys are unique
};

console.log(student); // console log entire object

console.log(student.name); // console log student name value

if (student.completedHomework) {
  console.log("Excellent!");
}

const year = 2023;

if (year > 2021) {
  student.completedSEIF = true;
  student.age++;
} else {
  student.completedSEIF = false;
}

console.log(student);

/*
const cat = {
  name: "Cat",
  age: 1,
  faveFoods: ["chicken", "fish"],
  canJump: true,
  canMeow: true,
  canCuddle: true,
};

const dog = {
  name: "Dog",
  age: 1,
  faveFoods: ["chicken", "fish"],
  canJump: true,
  canMeow: false,
  canCuddle: true,
};

// an array of objects
const dogs = [
  {
    name: "Crystal",
    age: 11,
    faveFoods: ["chicken", "fish"],
    canJump: true,
    canMeow: false,
    canCuddle: true,
  },
  {
    name: "Charlie",
    age: 11,
    faveFoods: ["chicken", "fish"],
    canJump: true,
    canMeow: false,
    canCuddle: true,
  },
  {
    name: "Charlie2",
    age: 5,
    faveFoods: ["chicken", "fish"],
    canJump: true,
    canMeow: false,
    canCuddle: true,
  },
  {
    name: "Charlie3",
    age: 6,
    faveFoods: ["chicken", "fish"],
    canJump: true,
    canMeow: false,
    canCuddle: true,
  },
];

let deploymentTotal = 0;
const checkForDeployment = (dog) => {
  if (dog.needsTraining) {
    console.log(`${dog.name} cannot be deployed at the moment`); // using backticks `
  } else {
    console.log(`${dog.name} can be deployed`); // using backticks `
    deploymentTotal++;
  }
};

// loops, conditionals, arrays, objects, functions
for (let i = 0; i < dogs.length; i++) {
  if (dogs[i].age < 7) {
    dogs[i].needsTraining = true;
  } else {
    dogs[i].needsTraining = false;
  }

  // check if dog can be deployed or not
  checkForDeployment(dogs[i]);
}

console.log("Total number of deployment is " + deploymentTotal);
*/

const obj = {
  1: "one",
};

console.log(obj["1"]);

for (let i = 1; i <= 10; i++) {
  obj["key-" + i] = "GeneratedValue-" + i;
}

console.log(obj);
