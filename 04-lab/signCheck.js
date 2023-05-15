function signCheck(numOne, numTwo, numThree) {
    
    //Try to do this WITHOUT multiplying the 3 numbers.

    let negativeCounter = 0;
    let inputArray = [];
    inputArray.push(numOne, numTwo, numThree);
    for (const number of inputArray) {
        if (number < 0) {
            negativeCounter++;
        }
    }

    negativeCounter % 2 === 0
        ? console.log("Positive")
        : console.log("Negative");

}
signCheck(-5, 1, 1)