function nonDecreasingSub(input = []) {
    let inputArray = input.slice();
    let firstElement = inputArray[0];
    let resultArray = [];
    resultArray.push(firstElement);
    let maxElement = firstElement;
    for (let i = 1; i < inputArray.length; i++) {
        let currentElement = inputArray[i];
        if (currentElement >= maxElement) {
            maxElement = currentElement;
            resultArray.push(currentElement);
        }        
    }
    console.log(resultArray.join(" "));
}
nonDecreasingSub([ 1, 3, 8, 4, 10, 12, 3, 2, 24])