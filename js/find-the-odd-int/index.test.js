import { findOdd } from "./index";

test("[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]", () => {
    const result = findOdd([
        20,
        1,
        -1,
        2,
        -2,
        3,
        3,
        5,
        5,
        1,
        2,
        4,
        20,
        4,
        -1,
        -2,
        5,
    ]);
    expect(result).toEqual(5);
});

test("[1,1,2,-2,5,2,4,4,-1,-2,5]", () => {
    const result = findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]);
    expect(result).toEqual(-1);
});

test("[20,1,1,2,2,3,3,5,5,4,20,4,5]", () => {
    const result = findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]);
    expect(result).toEqual(5);
});

test("[10]", () => {
    const result = findOdd([10]);
    expect(result).toEqual(10);
});

test("[1,1,1,1,1,1,10,1,1,1,1]", () => {
    const result = findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]);
    expect(result).toEqual(10);
});

test("[5,4,3,2,1,5,4,3,2,10,10]", () => {
    const result = findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]);
    expect(result).toEqual(1);
});
