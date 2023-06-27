function revealWords(words, text) {
    let wordsArray = words.split(", ");
    let textArray = text.split(" ");

    for (const word of wordsArray) {
        let hiddenWord = "*".repeat(word.length);

        textArray.forEach((element, index) => {
            if (element === hiddenWord) {
                textArray[index] = word;
            }
        });
    }

    console.log(textArray.join(" "));
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')