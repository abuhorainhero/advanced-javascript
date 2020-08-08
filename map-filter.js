const numbers = [3, 4, 5, 6, 7];

// Normal System: 
// const output = []
// for (let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// function square (element){
//     return element * element;
// }
// const square = element => element * element;
// const square = x => x * x;

// map এর কাজ হলো ‍square করা।
// const result = numbers.map(function (element){
//     return element * element;
// })
// const result = numbers.map(x => x * x);
// console.log(result);

// filter : শর্ত অনুযায়ী ‍array দিয়ে ‍দিবে ।
// const bigger = numbers.filter(x => x > 5);
// console.log(bigger);
// const lower = numbers.filter(x => x < 5);
// console.log(lower);

// find : শর্ত অনুযায়ী ‍একটা element দিয়ে ‍দিবে ।
const isThere = numbers.find(x => x < 5);
console.log(isThere);