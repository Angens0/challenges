// https://www.codewars.com/kata/56eb0be52caf798c630013c0
export const unluckyDays = year => {
    let sum = 0;
    for (let i = 1; i < 13; i++) {
        if (new Date(`${year}-${i}-13`).getDay() === 5) sum++;
    }

    return sum;
};
