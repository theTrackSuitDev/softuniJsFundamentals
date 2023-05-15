function processOddNumbers(inputArray) {
    let resultArray = [];
    for (let i = inputArray.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            resultArray.push(inputArray[i] * 2);
        }
    }

    console.log(resultArray.join(" "));
}
processOddNumbers([10, 15, 20, 25])