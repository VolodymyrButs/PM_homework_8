const assert = require("assert");

function extendWith(obj1, obj2) {
  for (key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

assert.deepStrictEqual(
  extendWith(
    { flatWhite: ["doppio", "hot", "milk"], isValid: true },

    { isValid: false, additionalProp: { thisIsGoodProp: 123 } }
  ),

  {
    flatWhite: ["doppio", "hot", "milk"],
    isValid: true,
    additionalProp: { thisIsGoodProp: 123 },
  }
);

assert.deepStrictEqual(
  extendWith(
    { isValid: false, myMax: 9990 },

    { isValidos: false, myMin: 8999 }
  ),

  { isValid: false, myMax: 9990, isValidos: false, myMin: 8999 }
);

console.log("Looks good");
