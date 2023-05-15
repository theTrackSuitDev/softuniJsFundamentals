function maxNumber(input) {
    let topIntArray = [];
    let numbers = input.slice(0);

    while (numbers.length > 0) {
        for (let i = 0; i < input.length; i++) {
            let currentNumber = input[i];
            numbers.shift();
            let currMax = Math.max(...numbers);
            if (currentNumber > currMax) {
                topIntArray.push(currentNumber);
            }
        }
    }
    console.log(topIntArray.join(" "));
}
maxNumber([27, 19, 42, 2, 13, 45, 48])