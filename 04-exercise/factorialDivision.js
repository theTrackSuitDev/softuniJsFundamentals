function factorialDivision(numOne, numTwo) {
    let factorial = 0;
    function factorialFinder(num) {
        if (num === 0 || num === 1) {
            factorial = 1;
        } else {
            factorial = num * (num - 1);
            for (let i = num - 2; i > 0; i--) {
                factorial *= i;                
            }
        }
        return factorial;
    }

    let numOneFactorial = factorialFinder(numOne);
    let numTwoFactorial = factorialFinder(numTwo);
    let result = numOneFactorial / numTwoFactorial;
    console.log(result.toFixed(2));
}
factorialDivision(6, 2)