// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

export const power = (base, exponent) =>
  !exponent ? 1 : base * power(base, exponent - 1);
