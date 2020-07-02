import { mergeSort } from "./";
import { getRandomIntInclusive } from "../utils/getRandomIntInclusive";

const getRandomArray = (minValue = -100, maxValue = 100, maxLength = 100) => {
  const length = getRandomIntInclusive(0, maxLength);

  return Array.from({ length }).map(_ =>
    getRandomIntInclusive(minValue, maxValue)
  );
};

test("random tests", () => {
  let testCount = 100;

  while (testCount--) {
    const array = getRandomArray();
    const sortedArray = mergeSort(array);
    expect(sortedArray).toEqual(array.sort((a, b) => a - b));
  }
});

test("[]", () => {
  const result = mergeSort([]);
  expect(result).toEqual([]);
});

test("[1]", () => {
  const result = mergeSort([1]);
  expect(result).toEqual([1]);
});

test("[0]", () => {
  const result = mergeSort([0]);
  expect(result).toEqual([0]);
});

test("[-1]", () => {
  const result = mergeSort([-1]);
  expect(result).toEqual([-1]);
});

test("[0, 0, 0, 0, 0]", () => {
  const result = mergeSort([0, 0, 0, 0, 0]);
  expect(result).toEqual([0, 0, 0, 0, 0]);
});

test("[10, 24, 76, 73]", () => {
  const result = mergeSort([10, 24, 76, 73]);
  expect(result).toEqual([10, 24, 73, 76]);
});

test("[15, 0, -1, 54, 30444, -5, 23, -6, 34, 55, 55, 55, 55, 67, -2]", () => {
  const result = mergeSort([
    15,
    0,
    -1,
    54,
    30444,
    -5,
    23,
    -6,
    34,
    55,
    55,
    55,
    55,
    67,
    -2,
  ]);
  expect(result).toEqual([
    -6,
    -5,
    -2,
    -1,
    0,
    15,
    23,
    34,
    54,
    55,
    55,
    55,
    55,
    67,
    30444,
  ]);
});
