// https://www.codewars.com/kata/5263c6999e0f40dee200059d

const keypad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [undefined, "0", undefined],
];

export const getPINs = observed => {
    const allVariants = observed.split("").map(getDigitVariants);

    let isFinished = false;
    const PINs = [];
    const indexes = new Array(observed.length).fill(0);

    while (!isFinished) {
        const PIN = allVariants.map((p, i) => p[indexes[i]]).join("");
        PINs.push(PIN);

        // increment indexes until last index exceeds its max value
        ++indexes[0];
        for (let i = 0; i < indexes.length; i++) {
            if (indexes[i] >= allVariants[i].length) {
                if (i + 1 >= indexes.length) {
                    isFinished = true;
                } else {
                    indexes[i + 1]++;
                    indexes[i] = 0;
                }
            } else {
                break;
            }
        }
    }

    return PINs;
};

const getDigitVariants = digit => {
    const coords = getDigitCoords(digit);

    return `${digit}${getAdjacentDigits(coords)}`;
};

const getDigitCoords = digit => {
    const coords = { x: undefined, y: undefined };

    for (let i = 0; i < keypad.length; i++) {
        const index = keypad[i].findIndex(d => d === digit);
        if (index !== -1) {
            coords.x = index;
            coords.y = i;
            break;
        }
    }

    return coords;
};

const getAdjacentDigits = ({ x, y }) => {
    const arr = Array.from({ length: 4 });
    arr[0] = getDigitFromCoords({ x: x - 1, y });
    arr[1] = getDigitFromCoords({ x: x + 1, y });
    arr[2] = getDigitFromCoords({ x, y: y - 1 });
    arr[3] = getDigitFromCoords({ x, y: y + 1 });

    return arr.join("");
};

const getDigitFromCoords = ({ x, y }) => (keypad[y] ? keypad[y][x] : undefined);
