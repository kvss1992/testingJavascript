const sum = (a, b) => a + b;

let result = sum(3, 9);
let expected = 12;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

const sub = (a, b) => a - b;
result = sub(6, 2);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
