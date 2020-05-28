// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array.There can be negative numbers in the array,
// but it will always be sorted.

// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus
// You must do this with constant or O(1) space and O(n) time.

export const countUniqueValues = arr => {
    if (arr.length < 2) {
        return arr.length;
    }

    let result = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            ++result;
        }
    }

    return result;
};
