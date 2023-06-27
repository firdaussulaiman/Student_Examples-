console.log("w02d2 - more about objects!");

/*
const student = {
  // add properties or key value pairs to an object
  name: "Zach",
  credits: 10,
  classes: ["HTML", "CSS", "Javascript", "React"],
  friend: {
    name: "ZQ",
    type: "student",
    laptop: {
      brand: "Acer",
      operatingSystem: "Windows 10",
    },
    classes: ["NodeJS", "Express", "Rest services"],
  },
};

// dot notation - default
console.log(student.classes); // accessing the object property array
console.log(student.classes[2]); // access the third element in the array

// square brackets
console.log(student["classes"][2]); // access the third element in the classes array

// iterate through classes array
for (let i = 0; i < student.classes.length; i++) {
  console.log(student.classes[i]); // 0..1..2..3 prints the elements as it loops through
}

// access student friend object
console.log(student.friend.name);

// access student friend laptop OS object
console.log(student.friend.laptop.operatingSystem);

// access student friend classes array
console.log(student.friend.classes[0]);

// control flow
if (student.friend.laptop.operatingSystem === "Windows 10") {
  console.log("Please download the windows version of Github");
} else if (student.friend.laptop.operatingSystem === "Mac") {
  console.log("Please download the Mac version of Github");
}
*/

// Array of dinner objects
/*
const dinner = [
  {
    name: "Cai fan",
    price: 6,
  },
  { name: "Ramen", price: 7 },
  { name: "Fried rice", price: 5.5 },
];

// print ramen
console.log(`One of us had ${dinner[1].name} for dinner and it costs $${dinner[1].price}`);
*/

// Loop through an object
const student = {
  name: "Zack",
  credits: 10,
  classes: ["HTML", "CSS", "JS"],
};

// Object.keys()
//console.log(Object.keys(student));

// iterate through the keys of the object using Object.keys
//const keys = Object.keys(student); // [ 'name', 'credits', 'classes' ]
// then as we iterate through the object keys, we want to display the value using object square brackets
/*
for (const key of keys) {
  // for of loop which James mentioned
  console.log(student[key]); // 3 keys or 1000 or a million keys
}
for (let i = 0; i < keys.length; i++) {
  console.log(student[keys[i]]);
}
*/

// for ... in loop designed to loop through object keys
for (const key in student) {
  console.log(student[key]); // using square bracket
}

// function inside an object
const seif = {
  workingOnLabs: () => {
    console.log("Labs? not again!");
  },
};

seif.workingOnLabs();

const foo = () => {
  return {
    someProperty: "hi!",
  };
};

const returnProperty = foo(); // store the returned object inside a variable
console.log(returnProperty.someProperty);

// array - sequential list of elements of the same data type
const students = ["Zack", "ZQ", "Doreen"];
const accounts = [123123, 132131, 1232432, 2323423, 2343242];
const classes = [
  {
    name: "HTML",
  },
  { name: "CSS" },
];

// using object for elements of different data type
