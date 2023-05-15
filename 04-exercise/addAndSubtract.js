function addAndSubtract(numOne, numTwo, numThree) {
    // Write a function sum() to get the sum of the first two integers and 
    // subtract() function that subtracts the third integer from the result.

    const sum = (a, b) => a + b;
    let sumOfFirstTwo = sum(numOne, numTwo);
    const subtract = (a, b) => a - b;
    let result = subtract(sumOfFirstTwo, numThree);
    console.log(result);
}
addAndSubtract(42,
    58,
    100)