function sumFirstAndLast(stringArray) {
    let firstNum = Number(stringArray[0]);
    let lastNum = Number(stringArray[stringArray.length-1]);
    let result = firstNum + lastNum;
    console.log(result);
}
sumFirstAndLast(['11', '58', '69'])