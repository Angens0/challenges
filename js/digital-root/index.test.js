import { digital_root } from "./index";

test("16", () => {
    const result = digital_root(16);
    expect(result).toEqual(7);
});

test("942", () => {
    const result = digital_root(942);
    expect(result).toEqual(6);
});

test("456", () => {
    const result = digital_root(456);
    expect(result).toEqual(6);
});

test("132189", () => {
    const result = digital_root(132189);
    expect(result).toEqual(6);
});

test("493193", () => {
    const result = digital_root(493193);
    expect(result).toEqual(2);
});
