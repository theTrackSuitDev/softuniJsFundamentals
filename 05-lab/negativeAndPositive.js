function negativeAndPositive(inputArray) {
    let resultArray = [];
    for (const number of inputArray) {
        number < 0
            ? resultArray.unshift(number)
            : resultArray.push(number);   
    }
    
    for (const number of resultArray) {
        console.log(number);
    }
}
negativeAndPositive([7, -2, 8, 9])