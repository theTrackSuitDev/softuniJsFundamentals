function smallestOfThree(numOne, numTwo, numThree) {
    // let smallestNum = Math.min(numOne, numTwo, numThree);
    // console.log(smallestNum);
    let numbersArray = [];
    numbersArray.push(numOne, numTwo, numThree);
    let currentMin = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < numbersArray.length; i++) {
        const currentNum = numbersArray[i];
        if (currentNum < currentMin) {
            currentMin = currentNum;
        }
    }
    console.log(currentMin);
}
smallestOfThree(25,
21,
4)