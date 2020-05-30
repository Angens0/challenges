import { persistence } from "./index";

test("39", () => {
    const result = persistence(39);
    expect(result).toBe(3);
});

test("999", () => {
    const result = persistence(999);
    expect(result).toBe(4);
});

test("4", () => {
    const result = persistence(4);
    expect(result).toBe(0);
});
