//1. Introduction to Higher Order Functions
//Callback function definition

function callback(){
  console.log("Callback function");

}
// Higher Order Function definition

function higherOrder(foo){
  console.log("Higher Order Function");
  return foo()
  
}
// Pass the Higher Order Function the Callback function as an argument
higherOrder(callback);

// Example data for 2 and 3
const brunchMenu = [
  "eggs benedict",
  "huevos rancheros",
  "fried chicken & waffle",
  "fried egg sandwich",
];


// 2. Built-in Higher Order Functions

// Map - "Transforms" each item in the array and returns a new array
const uppercaseMenu = brunchMenu.map((menuItem)=> menuItem.toUpperCase())
console.log(uppercaseMenu);

const brunchPrices = [15.0, 16.0, 18.0, 12.0];
// Filter - Returns a new array with items that pass the condition in the callback
const cheaperMenuPrices = brunchPrices.filter((price)=> price <17);
console.log(cheaperMenuPrices);













