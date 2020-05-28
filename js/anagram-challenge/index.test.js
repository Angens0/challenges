import { validAnagram } from ".";

test("empty string", () => {
    const result = validAnagram("", "");
    expect(result).toBe(true);
});

test("same string", () => {
    const result = validAnagram("test", "test");
    expect(result).toBe(true);
});

test("including 1", () => {
    const result = validAnagram("test", "tests");
    expect(result).toBe(false);
});

test("including 2", () => {
    const result = validAnagram("tests", "test");
    expect(result).toBe(false);
});

test('"aaz", "zza"', () => {
    const result = validAnagram("aaz", "zza");
    expect(result).toBe(false);
});

test('"anagram", "nagaram"', () => {
    const result = validAnagram("anagram", "nagaram");
    expect(result).toBe(true);
});

test('"rat", "car"', () => {
    const result = validAnagram("rat", "car");
    expect(result).toBe(false);
});

test('"awesome", "awesom"', () => {
    const result = validAnagram("awesome", "awesom");
    expect(result).toBe(false);
});

test('"amanaplanacanalpanama", "acanalmanplanpamana"', () => {
    const result = validAnagram("amanaplanacanalpanama", "acanalmanplanpamana");
    expect(result).toBe(false);
});

test('"qwerty", "qeywrt"', () => {
    const result = validAnagram("qwerty", "qeywrt");
    expect(result).toBe(true);
});

test('"texttwisttime", "timetwisttext"', () => {
    const result = validAnagram("texttwisttime", "timetwisttext");
    expect(result).toBe(true);
});
