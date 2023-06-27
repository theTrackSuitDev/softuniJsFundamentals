function countOccurrences(text, word) {
    let count = 0;
    
    let wordsArray = text.split(" ");

    for (const element of wordsArray) {
        if (element === word) {
            count++;
        }
    }

    console.log(count);
}
countOccurrences('softuni is great place for learning new programming languages',
'softuni')