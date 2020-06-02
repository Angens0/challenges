import { createPhoneNumber } from "./index";

test("[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]", () => {
    const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    expect(result).toEqual("(123) 456-7890");
});

test("[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]", () => {
    const result = createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    expect(result).toEqual("(111) 111-1111");
});
