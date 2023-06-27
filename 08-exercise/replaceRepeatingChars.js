function replaceRepeatingChars(inputString) {
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        let currChar = inputString[i];
        if (currChar != inputString[i + 1]) {
            result += currChar
        } 
    }

    console.log(result);
}
replaceRepeatingChars('qqqwerqwecccwd')