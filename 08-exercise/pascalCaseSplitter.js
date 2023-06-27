function pascalCaseSplitter(inputString) {
    let wordsArray = [];
    let currentWord = "";
    for (let i = 0; i < inputString.length; i++) {
        let currAscii = inputString.charCodeAt(i);
        if (currAscii > 64 && currAscii < 91) {
            if (currentWord.length > 0) {
                wordsArray.push(currentWord);
            }
            currentWord = "";
        } 
        currentWord += inputString[i];
    }

    wordsArray.push(currentWord);

    console.log(wordsArray.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')