function maxSequence(inputArray) {
    let numbers = inputArray.slice(0);
    let maxSequence = 0;
    let maxSequenceNum;
    let currSequence = 0;
    while (numbers.length > 0) {
        let currNum = numbers.shift();
        currNum === numbers[0]
            ? currSequence++
            : currSequence = 0;
        if (currSequence > maxSequence) {
            maxSequence = currSequence;
            maxSequenceNum = Number(currNum);
        }
    }
    let resultArray = [];
    for (let index = 0; index <= maxSequence; index++) {
        resultArray.push(maxSequenceNum);    
    }
    console.log(resultArray.join(" "));
}
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])