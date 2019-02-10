const expect = require("./setup-globals");
const { sum, subtract } = require("./math");

let result, expected;

result = sum(3, 3);
expected = 6;
expect(result).toBe(expected);

result = subtract(8, 4);
expected = 4;
expect(result).toBe(expected);

let tempVariable = "a";
result = "a";
expect(tempVariable).toEqual(result);

tempVariable = 5;
result = 5;
expect(tempVariable).toBeGreaterThan(result);
