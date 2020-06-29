// Write a function called recursiveRange which accepts a number and adds up
// all the numbers from 0 to the number passed to the function

export const recursiveRange = n => (n === 1 ? 1 : n + recursiveRange(n - 1));