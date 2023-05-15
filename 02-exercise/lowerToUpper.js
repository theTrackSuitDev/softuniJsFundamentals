function lowerToUpper(inputChar) {
    let asciiValue = inputChar.charCodeAt()
    asciiValue < 97
        ? console.log("upper-case")
        : console.log("lower-case");
}
lowerToUpper("a")