function memoryGame(inputArray = []) {
    let sequenceArray = inputArray.shift().split(" ");
    let movesCount = 0;

    let nextGuess = inputArray.shift();
    while (nextGuess != "end") {
        nextGuess = nextGuess.split(" ").map(Number);
        let indexOne = nextGuess.shift();
        let indexTwo = nextGuess.shift();
        movesCount++;

        if (indexOne >= sequenceArray.length ||
            indexOne < 0 ||
            indexTwo >= sequenceArray.length ||
            indexTwo < 0 || 
            indexOne === indexTwo) {
                console.log("Invalid input! Adding additional elements to the board");
                let elementToAdd = `-${movesCount}a`;
                let indexToAdd = sequenceArray.length / 2;
                sequenceArray.splice(indexToAdd, 0, elementToAdd, elementToAdd);
                nextGuess = inputArray.shift();
                continue;
        }

        if (sequenceArray[indexOne] === sequenceArray[indexTwo]) {
            let elementFound = sequenceArray[indexOne];
            console.log(`Congrats! You have found matching elements - ${elementFound}!`);
            sequenceArray = sequenceArray.filter(el => el != elementFound);
        } else {
            console.log("Try again!");
        }

        if (sequenceArray.length === 0) {
            console.log(`You have won in ${movesCount} turns!`);
            return;
        }

        nextGuess = inputArray.shift();
    }

    console.log("Sorry you lose :(");
    console.log(sequenceArray.join(" "));
}
memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])