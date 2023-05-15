function printAndSum(numOne, numTwo) {
    let startNum = numOne;
    let endNum = numTwo;
    let sum = 0;
    let printResult = ' ';
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
        printResult += i + ' ';        
    }
    console.log(printResult.trim());
    console.log(`Sum: ${sum}`);
}
printAndSum(50, 60)