function editCheck(str1, str2) {
    let mergedString = str1.concat(str2)
    let tempArr = mergedString.toLowerCase().split('');
    let hashValue = tempArr.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1;
        }
        else {
            acc[curr] = 1
        }
        return acc;
    }, {});
    console.log(hashValue)
    return Object.values(hashValue).filter((val) => val == 1).length;
}
console.log(editCheck("pale", "pale"))