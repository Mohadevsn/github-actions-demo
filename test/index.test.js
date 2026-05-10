const { add, subtract, multiply, divide } = require("../src/index");

test("Addition : 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("Soustraction : 10 - 4 = 6", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("Multiplication : 3 * 4 = 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("Division : 10 / 2 = 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("Division par zéro → erreur", () => {
  expect(() => divide(5, 0)).toThrow("Division par zéro impossible");
});

test("Addition : 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(99); // ← valeur fausse exprès
});