import { fib } from "../fib";

test("fib(1)", () => {
  const result = fib(1);
  expect(result).toEqual(1);
});

test("fib(2)", () => {
  const result = fib(2);
  expect(result).toEqual(1);
});

test("fib(3)", () => {
  const result = fib(3);
  expect(result).toEqual(2);
});

test("fib(4)", () => {
  const result = fib(4);
  expect(result).toEqual(3);
});

test("fib(10)", () => {
  const result = fib(10);
  expect(result).toEqual(55);
});

test("fib(28)", () => {
  const result = fib(28);
  expect(result).toEqual(317811);
});

test("fib(35)", () => {
  const result = fib(35);
  expect(result).toEqual(9227465);
});
