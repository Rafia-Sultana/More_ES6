const numbers = [4, 6, 8, 10];
const output2 = [];
// for (const number of numbers) {
//     const result = number * 2;
//     output.push(result);
// }
// console.log(output);

const doubleIt = number => number * 2;
// for (const number of numbers) {
//     const result = doubleIt(number);
//     output2.push(result);

// }
// console.log(output2);

// const output = numbers.map(doubleIt);
const output = numbers.map(number => number * 2);
console.log(output);
