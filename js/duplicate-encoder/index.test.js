import { duplicateEncode } from "./index";

test("din", () => {
    const result = duplicateEncode("din");
    expect(result).toEqual("(((");
});

test("recede", () => {
    const result = duplicateEncode("recede");
    expect(result).toEqual("()()()");
});

test("Success", () => {
    const result = duplicateEncode("Success");
    expect(result).toEqual(")())())");
});

test("(( @", () => {
    const result = duplicateEncode("(( @");
    expect(result).toEqual("))((");
});
