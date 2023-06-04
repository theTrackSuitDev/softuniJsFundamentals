function cardGame(inputArray) {
    let powerTab = {
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
    };

    let typeTab = {
        S: 4,
        H: 3,
        D: 2,
        C: 1,
    };

    let playersObject = {};

    for (const entry of inputArray) {
        let playerName = entry.split(": ", 1);
        playersObject[playerName] = [];
    }

    while (inputArray.length > 0) {
        let currentPlayer = inputArray.shift();
        let playerName = currentPlayer.split(": ", 1);
        let cardsString = currentPlayer.split(`${playerName}: `)[1];
        playersObject[playerName].push(cardsString);
    }

    for (const name in playersObject) {
        playersObject[name] = playersObject[name].join(", ");
        let cardsArray = playersObject[name].split(", ");
        let totalValue = 0;

        while (cardsArray.length > 0) {
            let currentCard = cardsArray.shift();
            let currentCardDuplicateIndex = cardsArray.findIndex(
                (el) => el === currentCard
            );
            
            if (currentCardDuplicateIndex === -1) {
                let type = currentCard.slice(-1);
                let power = currentCard.slice(0, -1);
                let cardValue = powerTab[power] * typeTab[type];
                totalValue += cardValue;
            }
        }
        console.log(`${name}: ${totalValue}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    );
