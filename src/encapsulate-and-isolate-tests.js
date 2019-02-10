const { expect, test } = require("./setup-globals");
const { subtract, sum } = require("./math");

const sumTest = () => {
  const result = sum(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
};

test("sum", sumTest);

const subTest = () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
};

test("subtract", subTest);
