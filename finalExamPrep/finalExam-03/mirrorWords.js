function mirrorWords(inputArray) {
    let pattern = /([(@|#)])(?<firstWord>[a-zA-Z]{3,})\1\1(?<secondWord>[a-zA-Z]{3,})\1/g;

    let inputString = inputArray.shift();
    let validPairsArray = inputString.match(pattern);
    if (validPairsArray) {
        console.log(`${validPairsArray.length} word pairs found!`);
    } else {
        console.log("No word pairs found!");
        console.log("No mirror words!");
        return;
    }

    let pairsIterator = inputString.matchAll(pattern);
    let mirrorsArray = [];
    for (const match of pairsIterator) {
        if (match.groups.firstWord === match.groups.secondWord.split("").reverse().join("")) {
            mirrorsArray.push(`${match.groups.firstWord} <=> ${match.groups.secondWord}`);
        }
    }

    mirrorsArray.length === 0
        ? console.log("No mirror words!")
        : console.log(`The mirror words are:\n${mirrorsArray.join(", ")}`);
}
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);