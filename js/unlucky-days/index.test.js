import { unluckyDays } from "./index";

test("1586", () => {
    const result = unluckyDays(1586);
    expect(result).toEqual(1);
});

test("1001", () => {
    const result = unluckyDays(1001);
    expect(result).toEqual(3);
});

test("2819", () => {
    const result = unluckyDays(2819);
    expect(result).toEqual(2);
});

test("2792", () => {
    const result = unluckyDays(2792);
    expect(result).toEqual(2);
});

test("2723", () => {
    const result = unluckyDays(2723);
    expect(result).toEqual(2);
});

test("1909", () => {
    const result = unluckyDays(1909);
    expect(result).toEqual(1);
});

test("1812", () => {
    const result = unluckyDays(1812);
    expect(result).toEqual(2);
});

test("1618", () => {
    const result = unluckyDays(1618);
    expect(result).toEqual(2);
});

test("2132", () => {
    const result = unluckyDays(2132);
    expect(result).toEqual(1);
});

test("2065", () => {
    const result = unluckyDays(2065);
    expect(result).toEqual(3);
});
