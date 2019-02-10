const sum = (a, b) => a + b;
const sub = (a, b) => a - b;

let result = sum(3, 9);
let expected = 10;

expect(result).toBe(expected);

result = sub(6, 2);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
