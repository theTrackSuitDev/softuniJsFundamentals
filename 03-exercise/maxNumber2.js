function maxNumber(numbers) {
    let topIntArray = [];
    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        let isTop = true;
        for (let j = i + 1; j < numbers.length; j++) {
            let nextNum = numbers[j];
            if (currentNumber <= nextNum) {
                isTop = false;
            }
        }
        if (isTop) {
            topIntArray.push(currentNumber);
        }
    }
    console.log(topIntArray.join(" "));
}
maxNumber([27, 19, 42, 2, 13, 45, 48])