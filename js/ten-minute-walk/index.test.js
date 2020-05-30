import { isValidWalk } from "./index";

test("['n','s','n','s','n','s','n','s','n','s']", () => {
    const result = isValidWalk([
        "n",
        "s",
        "n",
        "s",
        "n",
        "s",
        "n",
        "s",
        "n",
        "s",
    ]);
    expect(result).toEqual(true);
});

test("['w','e','w','e','w','e','w','e','w','e','w','e']", () => {
    const result = isValidWalk([
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
        "w",
        "e",
    ]);
    expect(result).toEqual(false);
});

test("['w']", () => {
    const result = isValidWalk(["w"]);
    expect(result).toEqual(false);
});

test("['n','n','n','s','n','s','n','s','n','s']", () => {
    const result = isValidWalk([
        "n",
        "n",
        "n",
        "s",
        "n",
        "s",
        "n",
        "s",
        "n",
        "s",
    ]);
    expect(result).toEqual(false);
});
