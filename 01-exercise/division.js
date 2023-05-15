function division(inputNum) {
    let numToCheck = Number(inputNum);
    let highestDiv = 0;
    let isDivisible = true;
    if (numToCheck % 10 == 0) {
        highestDiv = 10;
    } else if (numToCheck % 7 == 0) {
        highestDiv = 7;
    } else if (numToCheck % 6 == 0) {
        highestDiv = 6;
    } else if (numToCheck % 3 == 0) {
        highestDiv = 3;
    } else if (numToCheck % 2 == 0) {
        highestDiv = 2;
    } else {
        isDivisible = false;
    }
    if (isDivisible) {
        console.log(`The number is divisible by ${highestDiv}`);
    } else {
        console.log(`Not divisible`);
    }
}
division(1643)