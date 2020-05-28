export const validAnagram = (text1, text2) => {
    if (text1.length !== text2.length) {
        return false;
    }

    const frequences1 = getFrequences(text1);
    const frequences2 = getFrequences(text2);

    return compareFrequences(frequences1, frequences2);
};

const getFrequences = text => {
    const frequences = {};
    let length = 0;
    for (let letter of text) {
        if (frequences[letter]) {
            ++frequences[letter];
        } else {
            ++length;
            frequences[letter] = 1;
        }
    }

    return { length, frequences };
};

const compareFrequences = (frequences1, frequences2) => {
    if (frequences1.length !== frequences2.length) {
        return false;
    }

    const { frequences: freq1 } = frequences1;
    const { frequences: freq2 } = frequences2;

    for (let letter in freq1) {
        if (freq2[letter] !== freq1[letter]) {
            return false;
        }
    }

    return true;
};
