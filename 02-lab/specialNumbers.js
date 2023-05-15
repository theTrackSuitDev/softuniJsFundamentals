function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let currNum = i;
        let currNumStr = currNum.toString();
        let sum = 0;
        for (let j = 0; j < currNumStr.length; j++) {
            sum += Number(currNumStr[j]);
        }
        sum === 5 || sum === 7 || sum === 11
            ? console.log(`${currNum} -> True`)
            : console.log(`${currNum} -> False`);   
    }
}
specialNumbers(20)