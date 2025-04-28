const sum = require('./sum');

test('1 + 2 debe ser 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('5 + 7 debe ser 12', () => {
	expect(sum(5, 7)).toBe(12);
});

test('-1 + -1 debe ser -2', () => {
	expect(sum(-1, -1)).toBe(-2);
});
