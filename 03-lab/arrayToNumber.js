function arrayToNumber(inputArray) {
    while (inputArray.length > 1) {
        let condensed = [];
        for (let i = 0; i < inputArray.length - 1; i++) {
            condensed[i] = inputArray[i] + inputArray[i + 1];
        }
        inputArray = condensed.slice(0);
    }
    console.log(inputArray.toString());
}
arrayToNumber([1])