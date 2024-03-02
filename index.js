// TypeError: find is not a function in JavaScript

// EXAMPLE 1 - Only call the `find()` method on valid arrays

const arr = [3, 6, 10];

const result = arr.find(num => num % 2 === 0);

console.log(result); // 👉️ 6

// ------------------------------------------------------------------

// // EXAMPLE 2 - Acessing an array property on an object before calling Array.find()

// const obj = {
//   site: ['bobby', 'hadz', 'com'],
// };

// const result = obj.site.find(element => {
//   return element.includes('bo');
// });

// console.log(result); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if the value is an array before calling `find()`

// const arr = null;

// const result = Array.isArray(arr)
//   ? arr.find(num => num % 2 === 0)
//   : 0;

// console.log(result); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using a simple `if` statement

// const arr = null;

// let result = 0;

// if (Array.isArray(arr)) {
//   result = arr.find(num => num % 2 === 0);
// }

// console.log(result); // 👉️ 0

// ------------------------------------------------------------------

// // EXAMPLE 5 - Convert the value to an Array before calling `find()`

// const set = new Set([13, 2, 3]);

// const result = Array.from(set).find(
//   element => element % 2 === 0,
// );
// console.log(result); // 👉️ 2
