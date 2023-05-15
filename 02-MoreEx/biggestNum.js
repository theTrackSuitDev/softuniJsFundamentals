function biggestNum(numOne, numTwo, numThree) {
    numbers = [numOne, numTwo, numThree];
    numbers.sort((a, b) => b - a);
    console.log(numbers[0]);
}
biggestNum(43,
    43.2,
    43.1)