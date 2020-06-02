// https://www.codewars.com/kata/525f50e3b73515a6db000b83

export const createPhoneNumber = digits => {
    const parts = [
        digits.splice(0, 3).join(""),
        digits.splice(0, 3).join(""),
        digits.join(""),
    ];

    return `(${parts[0]}) ${parts[1]}-${parts[2]}`;
};
