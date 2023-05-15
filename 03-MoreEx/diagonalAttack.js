function diagonalAttack(arrayOfStrings) {
    let inputArray = arrayOfStrings.slice();
    let aArray = [];
    let answerArray = [];
    let diagsAreEqual = false;
    
    for (let i = 0; i < inputArray.length; i++) {
        currArr = inputArray[i].split(" ");
        inputArray[i] = currArr.slice();
        inputArray[i] = inputArray[i].map((x) => parseInt(x));        
    }
    
    for (let i = 0; i < inputArray.length; i++) {
        aArray.push("a");
    }
    for (let i = 0; i < inputArray.length; i++) {
        answerArray.push([...aArray]);
    }

    let diagOneSum = 0;
    let diagTwoSum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        diagOneSum += inputArray[i][i];
        answerArray[i].splice(i, 1, inputArray[i][i]);
        diagTwoSum += inputArray[inputArray.length - 1 - i][i];
        answerArray[inputArray.length - 1 - i]
        .splice(i, 1, inputArray[inputArray.length - 1 - i][i]); 
    }

    if (diagOneSum === diagTwoSum) {
        diagsAreEqual = true;
        for (let i = 0; i < answerArray.length; i++) {
            for (let j = 0; j < answerArray.length; j++) {
                if (answerArray[i][j] === "a") {
                   answerArray[i].splice(j, 1, diagOneSum);
                }
            }
        }
    }

    diagsAreEqual
        ? answerArray.forEach((a) => console.log(a.join(" ")))
        : inputArray.forEach((a) => console.log(a.join(" ")));
}
diagonalAttack(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)