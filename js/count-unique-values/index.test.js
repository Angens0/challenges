import { countUniqueValues } from ".";

test("[1,1,1,1,1,2]", () => {
    const result = countUniqueValues([1, 1, 1, 1, 1, 2]);
    expect(result).toBe(2);
});

test("[1,2,3,4,4,4,7,7,12,12,13]", () => {
    const result = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
    expect(result).toBe(7);
});

test("[]", () => {
    const result = countUniqueValues([]);
    expect(result).toBe(0);
});

test("[-2,-1,-1,0,1]", () => {
    const result = countUniqueValues([-2, -1, -1, 0, 1]);
    expect(result).toBe(4);
});
