// Implement a function called, areThereDuplicates which accepts
// a variable number of arguments, and checks whether
// there are any duplicates among the arguments passed in.

// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

export const areThereDuplicates = (...args) => {
    const frequencies = {};

    for (let arg of args) {
        if (frequencies[arg]) {
            return true;
        } else {
            frequencies[arg] = 1;
        }
    }

    return false;
};
