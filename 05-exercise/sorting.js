function sorting(numbers) {
    let resultArray = [];
    numbers.sort((a, b) => a - b);
    while (numbers.length > 0) {
        resultArray.push(numbers.pop());
        if (numbers.length === 0) {
            break;
        } else {
            resultArray.push(numbers.shift());
        } 
    }

    console.log(resultArray.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])