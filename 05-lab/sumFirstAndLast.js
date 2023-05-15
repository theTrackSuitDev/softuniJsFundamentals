function sumFirstAndLast(inputArray) {
    let numbers = inputArray.slice();
    numbers = numbers.map(Number);
    let firstAndLastArray = [];
    firstAndLastArray.push(numbers.shift(), numbers.pop());
    let result = firstAndLastArray.reduce((a, x) => a + x, 0)
    console.log(result);
}
sumFirstAndLast(['20', '30', '40'])