function binaryToDecimal(binaryString) {
    let sum = 0;
    for (let i = 0; i < binaryString.length; i++) {
        let currNum = Number(binaryString[i]);
        sum = sum * 2 + currNum;   
    }
    console.log(sum);
}
binaryToDecimal("00001001")