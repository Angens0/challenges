import { recursiveRange } from "../recursiveRange";

test("productOfArray(1)", () => {
  const result = recursiveRange(1);
  expect(result).toEqual(1);
});

test("productOfArray(2)", () => {
  const result = recursiveRange(2);
  expect(result).toEqual(3);
});

test("productOfArray(6)", () => {
  const result = recursiveRange(6);
  expect(result).toEqual(21);
});

test("productOfArray(10)", () => {
  const result = recursiveRange(10);
  expect(result).toEqual(55);
});

test("productOfArray(19)", () => {
  const result = recursiveRange(19);
  expect(result).toEqual(190);
});
