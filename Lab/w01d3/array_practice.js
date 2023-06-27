// Part 1
const arr = [];
console.log(arr);

const faveFoods = ["Laksa", "Chicken rice", "Roti prata", "Pizza", "Sashimi", "Nasi Lemak"];
console.log(faveFoods);

//0, 1, 2, 3, 4; -> index (max 4 because it starts from 0)
// array length is the number of elements (max 5)
//console.log(faveFoods[length - 1]);
// console.log("faveFoods length is ", faveFoods.length);

// display last element
// console.log(faveFoods[4]);
// console.log(faveFoods[faveFoods.length - 1]);

// const thirdIndex = 2;
// console.log(faveFoods[thirdIndex]);

// to change the element value
// 1. access the element
// 2. assign new value to it
// faveFoods[1] = "Chicken Rice";
// console.log(faveFoods);

// using for loop to print the elements of faveFoods array
for (let i = 0; i < faveFoods.length; i++) {
  // i = 0
  // i = 2
  // i = 4 ...
  //   if (i === 4 || i % 2 === 0) {
  //     console.log("We like to eat " + faveFoods[i]);
  //   }

  if (faveFoods[i].charAt(0) === "P") {
    console.log("We like to eat " + faveFoods[i]);
  }
}

// Part 2
// squares array created
const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
// Change the first element of the array to equal itself times ten using the compound operator *=
squares[0] *= 10;
//squares[0] = squares[0] * 10; //
console.log(squares);
//Why wouldn't squares[0 * 10] work for this purpose?
squares[0] = 1; // what is this? -> access the first element
console.log(squares);
