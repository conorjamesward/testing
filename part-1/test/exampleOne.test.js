const exampleOne = require("../src/exampleOne")

test('adds 1 + 2 to equal 3', () => {
  expect(exampleOne(1,2)).toBe(3);
});