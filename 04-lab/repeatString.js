function repeat(string, n) {
    let stringToRepeat = string;
    let repeatTimes = n;
    let result = "";
    for (let i = 0; i < repeatTimes; i++) {
        result += stringToRepeat;  
    }

    return result;
}

console.log(repeat("abc", 3));
