import { hydrate } from "./index";

test("1 beer", () => {
    const result = hydrate("1 beer");
    expect(result).toEqual("1 glass of water");
});

test("1 shot, 5 beers and 1 glass of wine", () => {
    const result = hydrate("1 shot, 5 beers and 1 glass of wine");
    expect(result).toEqual("7 glasses of water");
});

test("2 glasses of wine and 1 shot", () => {
    const result = hydrate("2 glasses of wine and 1 shot");
    expect(result).toEqual("3 glasses of water");
});

test("1 shot, 5 beers and 1 glass of wine", () => {
    const result = hydrate("1 shot, 5 beers and 1 glass of wine");
    expect(result).toEqual("7 glasses of water");
});

test("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer", () => {
    const result = hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer");
    expect(result).toEqual("10 glasses of water");
});
