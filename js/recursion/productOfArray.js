// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

export const productOfArray = arr =>
  !arr.length ? 1 : arr[0] * productOfArray(arr.slice(1));
