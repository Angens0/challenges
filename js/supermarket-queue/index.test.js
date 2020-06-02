import { queueTime } from "./index";

test("[5,3,4], 1", () => {
    const result = queueTime([5, 3, 4], 1);
    expect(result).toEqual(12);
});

test("[10,2,3,3], 2", () => {
    const result = queueTime([10, 2, 3, 3], 2);
    expect(result).toEqual(10);
});

test("[2,3,10], 2", () => {
    const result = queueTime([2, 3, 10], 2);
    expect(result).toEqual(12);
});
