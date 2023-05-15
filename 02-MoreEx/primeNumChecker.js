function primeNumChecker(inputNum) {
    let isPrime = true;
    if (inputNum < 0) {
        isPrime = false;
    } else if (inputNum === 0 || inputNum === 1) {
        isPrime = false;
    } else if (inputNum % 2 == 0 && inputNum > 2) {
        isPrime = false;
    } else {
        let currSqrt = Math.sqrt(inputNum);
        for (let i = 3; i <= currSqrt; i += 2) {
            if (inputNum % i === 0) {
                isPrime = false;
            }
        }
    }
    console.log(isPrime);
}
primeNumChecker(7)