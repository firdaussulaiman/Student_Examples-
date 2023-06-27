console.log('functions');

//another way of dry
//..dont repeat yourself
//also part of refactoring

//define a function
const printStudentName = () => {
    console.log("firdaus");
}; //we call => fat arroiw because it is not ->

//to call/uinvoke/run the function - function name + ();
printStudentName(); //syntax

const printSum = () =>;{
console.log(10 + 10);
};

printSum()
const calculateSum = (num1, num2) => {
    //parameters within the parentheses
    //console.log(num1 + num2);
    return num1 + num2;
};
//cashier procedure
// call the function
let customerSalesTotal = 0;

customerSalesTotal += calculateSum(5,20);//arguements within the parentheses ()

customerSalesTotal = customerSalesTOtal + calculateSum(25, 25);//arguement within the parentheses
console.log('The customer sales total is ' + customerSalesTotal);
//total += calculate SubmitEvent(5,20);
