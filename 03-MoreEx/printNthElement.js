function printNthElement(input = []) {
    let inputArray = input.slice();
    let step = Number(inputArray.pop());
    let resultArray = [];
    for (let i = 0; i < inputArray.length; i += step) {
        resultArray.push(inputArray[i]);
    }
    console.log(resultArray.join(" "));
}
printNthElement(['dsa', 'asd', 'test', 'test', '2'])