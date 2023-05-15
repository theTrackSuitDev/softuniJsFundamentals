function oddAndEvenSums(number) {
    let numString = number.toString();
    let numberArray = numString.split("");
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < numberArray.length; i++) {
        let currNum = Number(numberArray[i]);
        currNum % 2 === 0
            ? evenSum += currNum
            : oddSum += currNum;
    }
    
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSums(3495892137259234)