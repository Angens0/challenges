// https://www.codewars.com/kata/54da539698b8a2ad76000228

export const isValidWalk = walk => {
    if (walk.length !== 10) return false;

    let a = 0,
        b = 0;

    for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case "n":
                ++a;
                break;
            case "s":
                --a;
                break;
            case "e":
                ++b;
                break;
            case "w":
                --b;
                break;
        }
    }

    return !a && !b;
};
