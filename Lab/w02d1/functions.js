console.log("functions!!");
// spike -> investigation into certain technology or framework (5days) to validate a particular tech whether we should use it or we can use it or not

// old way of defining function
// function printStudentNames() {
//   console.log("Haozhe");
//   console.log("Lina");
//   console.log("LK");
//   console.log("Vivien");
//   console.log("Tino");
//   console.log("Weisheng");
// }

// another way of DRY
// Don't repeat yourself
// also part of refactoring

// define a function - modern js way
const printStudentNames = () => {
  console.log("Haozhe");
  console.log("Lina");
  console.log("LK");
  console.log("Vivien");
  console.log("Tino");
  console.log("Weisheng");
}; // we call => fat arrow because it is not ->

// to call/invoke/run the function - function name + ()
// printStudentNames(); // syntax

// define new arrow function - modern javascript way of defining function
const calculateSum = (num1 = 1, num2 = 1) => {
  // parameters within the parentheses ()
  //console.log(num1 + num2);
  return num1 + num2;
};

// cashier procedure
// call the function
let customerSalesTotal = 0;

customerSalesTotal = customerSalesTotal + calculateSum(5, 20); // arguments within the parentheses ()

customerSalesTotal = customerSalesTotal + calculateSum(25, 25); // arguments within the parentheses ()

console.log("The customer sales total is " + customerSalesTotal);
