function addOrSubtract(input) {
    let numbers = input;
    let sum = 0;
    let sumNew = 0;
    for (const i in numbers) {
        let currentNumber = numbers[i];
        sum += currentNumber;
        currentNumber % 2 === 0
            ? numbers[i] += Number(i)
            : numbers[i] -= Number(i);
        sumNew += numbers[i];
    }
    console.log(numbers);
    console.log(sum);
    console.log(sumNew);
}
addOrSubtract([5, 15, 23, 56, 35])