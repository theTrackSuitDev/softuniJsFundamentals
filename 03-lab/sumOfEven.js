function sumOfEven(inputArray) {
    let result = 0;
    for (const current of inputArray) {
        let currentNumber = Number(current);
        if (currentNumber % 2 === 0) {
            result += currentNumber;
        }
    }
    console.log(result);
}
sumOfEven(['1','2','3','4','5','6'])