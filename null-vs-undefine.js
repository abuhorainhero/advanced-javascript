// Null হলো, কোন মান ছিলো । এখন নাই অর্থে ব্যবহার করা হয়।
// Undefined হলো, মূলত কোন ভূল থাকলে -  নিচে উদাহরণ দেওয়া হলো। 

let pakhi;

function add(num1, num2){
    console.log(num1+num2);
    return;
}
const result = add(12, 44)
console.log(result);

function add(num1, num2){
    console.log(num1+num2);
}
const result = add(12)
console.log(result);

const pemik = {name: "Abu Horain", phone: 01748008121};
console.log(pemik.gf);

let Fun = undefined;
console.log(Fun);

