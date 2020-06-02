// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

export const queueTime = (customers, n) => {
    let tills = Array.from({ length: n }).fill(0);
    for (let time of customers) {
        tills[0] += time;
        tills = tills.sort((a, b) => a - b);
    }

    return tills[tills.length - 1];
};
