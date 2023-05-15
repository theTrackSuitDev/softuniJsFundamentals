function evenAndOddSubtraction(inputArray) {
    let evenSum = 0;
    let oddSum = 0;
    for (const current of inputArray) {
        let currentNumber = Number(current);
        currentNumber % 2 === 0
            ? evenSum += currentNumber
            : oddSum += currentNumber;
    }
    let difference = evenSum - oddSum;
    console.log(difference);
}
evenAndOddSubtraction([1,2,3,4,5,6])