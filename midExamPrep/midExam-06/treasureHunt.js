function treasureHunt(inputArray) {
    let chestArray = inputArray.shift().split("|");

    let currentCommand = inputArray.shift();

    while (currentCommand != "Yohoho!") {
        let commandArray = currentCommand.split(" ");
        let action = commandArray.shift();
        switch (action) {
            case "Loot":
                for (const item of commandArray) {
                    if (!chestArray.includes(item)) {
                        chestArray.unshift(item);
                    }
                }
                break;
            case "Drop":
                let dropIndex = Number(commandArray.shift());
                if (chestArray[dropIndex]) {
                    let dropItem = chestArray[dropIndex];
                    chestArray.splice(dropIndex, 1);
                    chestArray.push(dropItem);
                }
                break;
    
            default:
                // Handles the Steal command.
                let stealCount = Number(commandArray.shift());
                if (stealCount >= chestArray.length) {
                    console.log(chestArray.join(", "));
                    chestArray = [];
                } else {
                    console.log(chestArray.slice(-stealCount).join(", "));
                    chestArray.splice(-stealCount);
                }
                break;
        }

        currentCommand = inputArray.shift();
    }

    let averageGain = chestArray.reduce((a, b) => a + b.length, 0) / chestArray.length;

    chestArray.length < 1
        ? console.log("Failed treasure hunt.")
        : console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])