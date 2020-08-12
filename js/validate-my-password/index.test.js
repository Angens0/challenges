import { validPass } from "./index";

test("Username123", () => {
    const result = validPass("Username123");
    expect(result).toEqual("VALID");
});

test("Username", () => {
    const result = validPass("Username");
    expect(result).toEqual("INVALID");
});

test("1Username", () => {
    const result = validPass("1Username");
    expect(result).toEqual("VALID");
});

test("123", () => {
    const result = validPass("123");
    expect(result).toEqual("INVALID");
});

test("a12", () => {
    const result = validPass("a12");
    expect(result).toEqual("INVALID");
});

test("Username123!", () => {
    const result = validPass("Username123!");
    expect(result).toEqual("INVALID");
});

test("ThisPasswordIsTooLong1234", () => {
    const result = validPass("ThisPasswordIsTooLong1234");
    expect(result).toEqual("INVALID");
});
