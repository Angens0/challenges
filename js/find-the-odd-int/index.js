// https://www.codewars.com/kata/54da5a58ea159efa38000836

export const findOdd = A => {
    const result = {};

    for (let i in A) {
        const int = A[i];
        if (result[int]) {
            delete result[int];
        } else {
            result[int] = true;
        }
    }

    return parseInt(Object.keys(result)[0]);
};
