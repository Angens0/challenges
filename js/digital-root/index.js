// https://www.codewars.com/kata/541c8630095125aba6000c00

export const digital_root = num => {
    while (num > 9) {
        num = num
            .toString()
            .split("")
            .map(Number)
            .reduce((prev, curr) => prev + curr, 0);
    }

    return num;
};
