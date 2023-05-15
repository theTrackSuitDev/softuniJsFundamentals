function sumOfOdd(n) {
    let sum = 0;
    let oddCount = 0;
    let currNum = 1;
    while (oddCount < n) {
        if (currNum % 2 != 0) {
            console.log(currNum);
            oddCount++;
            sum += currNum;
        }
        currNum++;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOdd(5)