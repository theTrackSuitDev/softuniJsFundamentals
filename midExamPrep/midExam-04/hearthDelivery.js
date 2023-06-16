function hearthDelivery(inputArray) {
    let hearthsNeeded = inputArray.shift().split("@").map(Number);

    let housesInNeed = hearthsNeeded.length;
    let lastPosition = 0;
    let nextCommand = inputArray.shift();
    while (nextCommand != "Love!") {
        let jumpLength = Number(nextCommand.split(" ")[1]);
        let index = lastPosition + jumpLength;
        if (index > hearthsNeeded.length - 1) {
            index = 0;
        }
        if (hearthsNeeded[index] != 0) {
            hearthsNeeded[index] -= 2;
            if (hearthsNeeded[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
                housesInNeed--;
            }
        } else {
            console.log(`Place ${index} already had Valentine's day.`);
        }

        lastPosition = index;
        nextCommand = inputArray.shift();
    }

    console.log(`Cupid's last position was ${lastPosition}.`);
    housesInNeed === 0
        ? console.log("Mission was successful.")
        : console.log(`Cupid has failed ${housesInNeed} places.`);
}
hearthDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])