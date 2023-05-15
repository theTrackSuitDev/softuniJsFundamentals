function digitName(number) {
    let lastDigit = number % 10;
    let digitNames = ["zero","one", "two", "three", "four", "five", 
    "six", "seven", "eight", "nine"];
    console.log(digitNames[lastDigit]);
}   
digitName(1643)