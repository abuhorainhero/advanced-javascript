// double equal == মানে হচে্ছ মান দুইটা ভিন্ন টাইপের হলেও একই টাইপের মধ্যে আনার চেষ্টা করে।
let num1 = 2;
let num2 = "2";
if (num1 == num2){
    console.log("condition double-equal is true.")
} 
else {
    console.log("condition double-equal is false.")
}

// triple equal === মানে হচে্ছ মান দুইটা একই টাইপের এবং একই হতে হবে।
if (num1 === num2){
    console.log("condition triple-equal is true.")
} 
else {
    console.log("condition triple-equal is false.")
}