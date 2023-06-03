function wordsTracker(inputArray) {
    let wordsToSearch = inputArray.shift().split(" ");
    let countObject = {};
    wordsToSearch.forEach(word => {
        countObject[word] = 0;
    });

    for (const word in countObject) {
        for (const element of inputArray) {
            if (element === word) {
                countObject[word] += 1;
            }
        }
    }

    let countArray = Object.entries(countObject);
    countArray.sort((a, b) => b[1] - a[1]);

    countArray.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`);
    });

}
wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 
    'the', 'And', 'finally', 'the', 'the', 'sentence'])