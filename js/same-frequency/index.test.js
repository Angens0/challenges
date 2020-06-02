import { sameFrequency } from "./index";

test("182,281", () => {
    const result = sameFrequency(182, 281);
    expect(result).toEqual(true);
});

test("34,14", () => {
    const result = sameFrequency(34, 14);
    expect(result).toEqual(false);
});

test("3589578, 5879385", () => {
    const result = sameFrequency(3589578, 5879385);
    expect(result).toEqual(true);
});

test("22,222", () => {
    const result = sameFrequency(22, 222);
    expect(result).toEqual(false);
});
