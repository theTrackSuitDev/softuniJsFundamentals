function counterStrike(inputArray) {
    let energy = Number(inputArray.shift());
    let battlesWon = 0;

    let currentCommand = inputArray.shift();

    while (currentCommand != "End of battle") {
        currentCommand = Number(currentCommand);
        if (currentCommand <= energy) {
            energy -= currentCommand;
            battlesWon++;
            if (battlesWon % 3 === 0) {
                energy += battlesWon;
            }
        } else {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            return;
        }

        currentCommand = inputArray.shift();
    }

    console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);

}
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])