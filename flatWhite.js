const assert = require("assert");

// for double nested array
const flatWhite = (arr) => [].concat(...arr);

// for multiple nested array

// const flatWhite = (array) => {
//   const flatArray = [];
//   array.forEach((item) => {
//     if (Array.isArray(item)) {
//       flatArray.push(...flatWhite(item));
//     } else {
//       flatArray.push(item);
//     }
//   });
//   return flatArray;
// };

assert.deepStrictEqual(flatWhite(["doppio", ["hot"], "milk"]), [
  "doppio",
  "hot",
  "milk",
]);

assert.deepStrictEqual(flatWhite([["espresso", "hot"], "milk"]), [
  "espresso",
  "hot",
  "milk",
]);

console.log("Looks good");
