const assert = require("assert");

// function extendWithEndless(...objects) {
//   let data = {};
//   for (i = 0; i < objects.length; i++) {
//     data = { ...data, ...objects[i] };
//   }
//   return data;
// }

// function extendWithEndless(...objects) {
//   let data = {};
//   objects.forEach((item) => (data = { ...data, ...item }));
//   return data;
// }

const extendWithEndless = (...objects) =>
  objects.reduce((acc, item) => ({ ...acc, ...item }), {});

assert.deepStrictEqual(
  extendWithEndless(
    { flatWhite: ["doppio", "hot", "milk"], isValid: true },

    { isValid: false, additionalProp: { thisIsGoodProp: 123 } },

    { prop3: true },

    { prop4: true },

    { isValid: [false, false] }
  ),

  {
    flatWhite: ["doppio", "hot", "milk"],

    isValid: [false, false],

    additionalProp: { thisIsGoodProp: 123 },

    prop3: true,

    prop4: true,
  }
);

console.log("Looks good");
