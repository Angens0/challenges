// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

export const duplicateEncode = word => {
    const arr = word.toLowerCase().split("");

    const frequencies = {};
    for (let char of arr) {
        frequencies[char] = frequencies[char] ? frequencies[char] + 1 : 1;
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = frequencies[arr[i]] > 1 ? ")" : "(";
    }

    return arr.join("");
};
