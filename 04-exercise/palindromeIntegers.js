function palindromeCheck(inputArray) {
    let numbers = inputArray.slice();
    for (let num of numbers) {
        let isPalindrome;
        let currentNumStr = num.toString();
        let currentNumArray = currentNumStr.split("");
        let currentNumArrayReversed = currentNumArray.reverse();
        let reversedNumStr = currentNumArrayReversed.join("");
        currentNumStr === reversedNumStr
            ? isPalindrome = true
            : isPalindrome = false;
        console.log(isPalindrome);
    }
}
palindromeCheck([32,2,232,1010])