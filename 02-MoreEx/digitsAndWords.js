function digitsAndWords(digitString) {
    stringsArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let number = stringsArray.findIndex(element => element === digitString);
    console.log(number);
}
digitsAndWords("one")