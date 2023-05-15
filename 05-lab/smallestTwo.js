function smallestTwo(inputArray) {
    inputArray.sort((a, b) => a - b);
    let resultArray = inputArray.slice(0, 2);
    console.log(resultArray.join(" "));
}
smallestTwo([30, 15, 50, 5])