function rounding(inputOne, inputTwo) {
    let numberToRound = Number(inputOne);
    let precision = Number(inputTwo);
    if (precision > 15) {
        precision = 15;
    }
    let result = numberToRound.toFixed(precision);
    console.log(parseFloat(result));
}
rounding(10.5,3)