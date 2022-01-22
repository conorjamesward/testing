const exampleOne = require('./exampleOne')

test('text conversion to lowercase', () => {
  expect(exampleOne('LOWERCASE', false)).toBe('lowercase')
})

test('text conversion to uppercase', () => {
  expect(exampleOne('uppercase', true)).toBe('UPPERCASE')
})