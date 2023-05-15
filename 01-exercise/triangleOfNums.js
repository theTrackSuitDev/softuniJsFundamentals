function triangle(inputNum) {
    let num = inputNum;
    for (let i = 1; i <= num; i++) {
        let currPrint = "";
        currPrint += i + " ";
        let finalPrint = currPrint.repeat(i);
        console.log(finalPrint);
    }
}
triangle(6)