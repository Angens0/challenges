// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

export const persistence = num => {
    let count = 0;

    while (num > 9) {
        num = num
            .toString()
            .split("")
            .map(Number)
            .reduce((prev, curr) => prev * curr, 1);
        count++;
    }

    return count;
};
