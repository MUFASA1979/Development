// // let fullName = "Mustafa Fakhruddin "
// // let yearOfBirth = "1979 "
// // let hobby = "Playing Cricket "
// // const 
// // console.log (fullName + yearOfBirth + hobby);
// const myName = ["Mustafa", "43", "Cricket"]
//     for (let index = 0; index < 5; index++) {
//         console.log (myName);
    
// }
    

// function total (num1, num2) {
//         console.log (num1 + num2 + 1);
                
//     }
// total (5, 2)



// for (let index = 5; index > 0; index--) {
//     console.log (index);
// }

// function counter(param1) {
//    for (let index = param1; index > 0; index--) {
//             console.log(index);

// }
// }
// counter(10)

// Question 4 🌶️🌶️🌶️: Write a for loop in JavaScript that iterates through an array of numbers and 
// calculates their sum.
// function sum(arr){
//     total=0;
//     for (counter = 0; counter < arr.length; counter++) {
//         total += arr[counter];
               
//     }
//     return total;

// }
// const arr = [1,2,3,4];
// const gTotal = sum(arr);
// console.log (gTotal);


function cost(figures){
    total=0
    for (counter=0; counter < figures.length; counter++){
    total += figures[counter];
    
}
return total;
}
console.log(cost ([1, 2, 3,]));
// const figures = [1, 2, 3];
// const gTotal = cost(figures)
// console.log (cost(figures));