function stringSubstring(word, text) {
    let textArray = text.split(" ");
    let wordToLower = word.toLowerCase();
    let isFound = false;

    for (const element of textArray) {
        let currWord = element.toLowerCase();
        if (currWord === wordToLower) {
            isFound = true;
            break;
        }
    }

    isFound
        ? console.log(word)
        : console.log(`${word} not found!`);

}
stringSubstring('python',
'JavaScript is the best programming language')