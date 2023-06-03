function wordOccurrences(inputArray) {
    let sentenceObject = {};
    for (const word of inputArray) {
        if (sentenceObject.hasOwnProperty(word)) {
            sentenceObject[word] += 1;
        } else {
        sentenceObject[word] = 1;
        }
    }

    let sentenceArray = Object.entries(sentenceObject);
    sentenceArray.sort((a, b) => b[1] - a[1]);
    
    sentenceArray.forEach(element => {
        let [word, count] = element;
        console.log(`${word} -> ${count} times`);
    });
}
wordOccurrences(["Here", "is", "the", "first", 
"sentence", "Here", "is", "another", "sentence", 
"And", "finally", "the", "third", "sentence"])