function sumDigits(number) {
    let inputNumberString = number.toString();
    let sum = 0;
        for (let i = 0; i < inputNumberString.length; i++) {
            sum += Number(inputNumberString[i]);
        }
    console.log(sum);
}
sumDigits(543)