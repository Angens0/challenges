import { productOfArray } from "../productOfArray";

test("productOfArray([1,2,3])", () => {
  const result = productOfArray([1, 2, 3]);
  expect(result).toEqual(6);
});

test("productOfArray([1,2,3,10])", () => {
  const result = productOfArray([1, 2, 3, 10]);
  expect(result).toEqual(60);
});

test("productOfArray([4,5])", () => {
  const result = productOfArray([4, 5]);
  expect(result).toEqual(20);
});

test("productOfArray([8,7,15,20])", () => {
  const result = productOfArray([8, 7, 15, 20]);
  expect(result).toEqual(16800);
});
