// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

export const sameFrequency = (a, b) =>
    compareStringFrequencies(a.toString(), b.toString());

const compareStringFrequencies = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }

    const frequency = getCharFrequency(a);

    for (let char of b) {
        --frequency[char];
        if (!frequency[char]) {
            delete frequency[char];
        }
    }

    return isObjectEmpty(frequency);
};

const getCharFrequency = str => {
    const result = {};

    for (let char of str) {
        result[char] = result[char] ? result[char] + 1 : 1;
    }

    return result;
};

const isObjectEmpty = obj => JSON.stringify(obj) === JSON.stringify({});
