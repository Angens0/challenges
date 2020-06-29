import { power } from "../power";

test("power(2,0)", () => {
  const result = power(2, 0);
  expect(result).toEqual(1);
});

test("power(2,2)", () => {
  const result = power(2, 2);
  expect(result).toEqual(4);
});

test("power(2,4)", () => {
  const result = power(2, 4);
  expect(result).toEqual(16);
});
