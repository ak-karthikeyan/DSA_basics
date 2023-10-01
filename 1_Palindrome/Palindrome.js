function getPermutations(str) {
    return Object.values(str.toLowerCase().replace(' ', '').split('').reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1;
        }
        else {
            acc[curr] = 1
        }
        return acc;
    }, {})).filter((val) => val % 2 !== 0).length === 1;
} console.log(getPermutations("tact coa"));