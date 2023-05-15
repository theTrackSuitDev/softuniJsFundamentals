function amazingNumbers(num) {
    let numStr = num + "";
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
    }
    let sumStr = sum + "";
    sumStr.includes("9")
        ? console.log(`${num} Amazing? True`)
        : console.log(`${num} Amazing? False`);
}
amazingNumbers(999)