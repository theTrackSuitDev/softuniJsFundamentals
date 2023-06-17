function numbers(inputString) {
    let numbersArray = inputString.split(" ").map(Number);
    let average = numbersArray.reduce((a, b) => a + b, 0) / numbersArray.length;
    let aboveAvgArray = numbersArray.filter(el => el > average);

    if (aboveAvgArray.length === 0) {
        console.log("No");
        return;
    } 

    aboveAvgArray.sort((a, b) => b - a);

    if (aboveAvgArray.length > 5) {
        aboveAvgArray.length = 5;
    }

    console.log(aboveAvgArray.join(" "));  
}
numbers('-1 -2 -3 -4 -5 -6')