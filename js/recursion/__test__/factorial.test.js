import { factorial } from "../factorial";

test("factorial(1)", () => {
  const result = factorial(1);
  expect(result).toEqual(1);
});

test("factorial(2)", () => {
  const result = factorial(2);
  expect(result).toEqual(2);
});

test("factorial(4)", () => {
  const result = factorial(4);
  expect(result).toEqual(24);
});

test("factorial(7)", () => {
  const result = factorial(7);
  expect(result).toEqual(5040);
});
