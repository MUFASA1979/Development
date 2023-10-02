// // function test (){
// //     console.log ("Hey Bro");
// // }

// // const test = (param) => {
// //     let total = 0
// //     for (counter = 0; counter < param.length; counter++) {
// //         total += param[counter];

// //     }
// //     return total;

// // }
// // // const gTotal = test([1, 2, 3, 4]);
// // console.log (test([1,2,3,4]));

// // const test = () => console.log("salam"); //console.log("hi");

// // Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers
// // and returns a new array with each number squared.

// const numbers = [1, 2, 3, 4];
// const squaredArray = (arr) => {
//   let newArray = [];
//   for (counter = 0; counter < arr.length; counter++) {
//     newArray.push(arr[counter] ** 2);
//   }
//   return newArray;
// };
// squaredArray(numbers);
// let newArray = squaredArray(numbers);
// console.log(newArray);

// // const squaredArray = (arr) => {
// //     let newArray =[];
// //     for(counter = 0; counter<arr.length; counter++){
// //         newArray.push(arr[counter]**2);

// //     }
// //     return newArray;
// // }
// // const newArray = squaredArray(arr)
// // squaredArray([1, 2, 3, 4]);
// // console.log(newArray);

// function printIt(x, y, z) {
//   console.log(x);
//   console.log(y);
//   console.log(z);
// }
// const rests = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// rests.forEach(printIt);

// ///***** */

// // const newNumbes = [2, 3, 4, 6];
// // function squareIt(x) {
// //   return x * x;
// // }
// // const squared = newNumbes.map(squareIt);
// // console.log(squared);

// const names = ["Mustafa", "ahmed", "asad"];
// function addDeveloper(name) {
//   return `Developer: ${name}`;
// }
// const newName = names.map(addDeveloper);
// console.log(newName);

// const numberss = [2, 3, 4, 5];
// function addNumber(num) {
//   return num - 3;
// }
// const newNumber = numberss.map(addNumber);
// console.log(newNumber);
