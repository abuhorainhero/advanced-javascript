// Hoisting : যদি কোন একটা scope এর ভিতরে var লিখে যদি কোন variable 
// declare করা হয়, তখন ওই variable declareTion টাহ কে তার parent scope 
// এ নিয়ে নিবে, তখন যে কোন জায়গা থেকে variable টাহ accessAble / hoisting হবে। 
// কিন্তু, যখন let / const দিয়ে variable declare করা হবে, তখন ওই scope
// এর মধ্যেই থেকে যাবে -- এটাকে আর hoisting হবে না। 
let bonus = 20;
function sum(first, second){
    let result = first + second + bonus;
    // console.log(bonus);
    if (result > 9){
        var mood = "happy"
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(3, 7);
// console.log(bonus);
// console.log(output);