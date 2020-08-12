// https://www.codewars.com/kata/59c01248bf10a47bd1000046

export const validPass = password =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,19}$/.test(password)
        ? "VALID"
        : "INVALID";
