const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const part = numbers.slice(0, -1);
console.log(part);
console.log(numbers);

const remove = numbers.splice(0, 4, 33);
console.log(remove);
console.log(numbers);

const together = numbers.join(" ami");
console.log(together);
console.log(numbers);