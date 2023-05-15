function reverseNumArray(num, numArray) {
    let printResult = " ";
    for (let i = num - 1; i >= 0; i--) {
        printResult += numArray[i] + " ";
    }
    console.log(printResult.trim());
} 
reverseNumArray(3, [10, 20, 30, 40, 50])