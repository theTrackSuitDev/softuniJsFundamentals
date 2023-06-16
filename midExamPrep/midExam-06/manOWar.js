function manOWar(inputArray) {
    let pirateShip = inputArray.shift();
    pirateShip = pirateShip.split(">");
    pirateShip = pirateShip.map(Number);

    let warShip = inputArray.shift();
    warShip = warShip.split(">");
    warShip = warShip.map(Number);

    const maxHealth = Number(inputArray.shift());

    let currentCommand = inputArray.shift();
    while (currentCommand != "Retire") {
        let commandArray = currentCommand.split(" ");
        let action = commandArray.shift();
        commandArray = commandArray.map(Number);

        switch (action) {
            case "Fire":
                let [fireIndex, fireDamage] = commandArray;
                if (warShip[fireIndex]) {
                    warShip[fireIndex] -= fireDamage;
                    if (warShip[fireIndex] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    } 
                }
                break;
            case "Defend":
                let [startIndex, endIndex, defendDamage] = commandArray;
                if (pirateShip[startIndex] && pirateShip[endIndex]) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= defendDamage;
                        if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    } 
                    }   
                }
                break;
            case "Repair":
                let [repairIndex, health] = commandArray;
                if (pirateShip[repairIndex]) {
                    pirateShip[repairIndex] += health;
                    if (pirateShip[repairIndex] > maxHealth) {
                        pirateShip[repairIndex] = maxHealth;
                    }
                }
                break;
            default:
                // Handles the Status command.
                let repairCounter = 0;
                pirateShip.forEach(section => {
                    if (section < maxHealth * 0.2) {
                       repairCounter++; 
                    }
                });

                console.log(`${repairCounter} sections need repair.`);
                break;
        }

       currentCommand = inputArray.shift(); 
    }

    let pirateShipSum = pirateShip.reduce((a, b) => a + b, 0);
    let warShipSum = warShip.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
}
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])