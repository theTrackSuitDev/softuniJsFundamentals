function numberModification(number) {
    let numberString = number.toString();

    function averageDigitValue(number) {
        let avgValue = 0;
        for (let i = 0; i < numberString.length; i++) {
            const currentDigit = Number(numberString[i]);
            avgValue += currentDigit;
        }
        avgValue /= numberString.length;
        return avgValue;
    }
    
    let avgValueOfNumber = averageDigitValue(number);
    while (avgValueOfNumber <= 5) {
        numberString += "9";
        avgValueOfNumber = averageDigitValue(numberString);
    }

    console.log(numberString);
}
numberModification(5835)