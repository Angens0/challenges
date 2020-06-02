// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

export const queueTime = (customers, n) => {
    let tills = Array.from({ length: n }).fill(0);
    for (let time of customers) {
        tills[0] += time;
        tills = sortTills(tills);
    }

    return tills[tills.length - 1];
};

const sortTills = tills => {
    for (let i = 0; i < tills.length - 1; i++) {
        if (tills[i] <= tills[i + 1]) {
            break;
        }
        const buffer = tills[i];
        tills[i] = tills[i + 1];
        tills[i + 1] = buffer;
    }

    return tills;
};
