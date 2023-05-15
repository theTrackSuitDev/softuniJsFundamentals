function intAndFloat(numOne, numTwo, numThree) {
    let sum = numOne + numTwo + numThree;
    sum % 1 > 0
    ? console.log(`${sum} - Float`)
    : console.log(`${sum} - Integer`);
}
intAndFloat(100, 200, 303)