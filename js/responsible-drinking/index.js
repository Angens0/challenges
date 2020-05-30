// https://www.codewars.com/kata/5aee86c5783bb432cd000018

export function hydrate(s) {
    const quantity = s
        .match(/\d+/g)
        .map(Number)
        .reduce((prev, curr) => prev + curr, 0);

    return `${quantity} glass${quantity === 1 ? "" : "es"} of water`;
}
