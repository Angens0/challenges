import { areThereDuplicates } from "./index";

test("1, 2, 3", () => {
    const result = areThereDuplicates(1, 2, 3);
    expect(result).toEqual(false);
});

test("1, 2, 2", () => {
    const result = areThereDuplicates(1, 2, 2);
    expect(result).toEqual(true);
});

test("'a', 'b', 'c', 'a'", () => {
    const result = areThereDuplicates("a", "b", "c", "a");
    expect(result).toEqual(true);
});
