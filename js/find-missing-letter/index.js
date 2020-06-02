// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

export const findMissingLetter = letters => {
    letters = letters.join("");
    const firstCharCode = letters.charCodeAt(0);

    for (let i = 1; i < letters.length; i++) {
        const charCode = letters.charCodeAt(i);

        if (charCode !== firstCharCode + i) {
            return String.fromCharCode(firstCharCode + i);
        }
    }
};
