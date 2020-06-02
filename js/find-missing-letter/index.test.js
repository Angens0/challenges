import { findMissingLetter } from "./index";

test('["a", "b", "c", "d", "f"]', () => {
    const result = findMissingLetter(["a", "b", "c", "d", "f"]);
    expect(result).toEqual("e");
});

test('["O","Q","R","S"]', () => {
    const result = findMissingLetter(["O", "Q", "R", "S"]);
    expect(result).toEqual("P");
});
