function gladiator(inputArray) {
    let inventory = inputArray.shift();
    let inventoryArray = inventory.split(" ");
    while (inputArray.length > 0) {
        let command = inputArray.shift();
        let commandArray = command.split(" ");
        let commandType = commandArray.shift();
        switch (commandType) {
            case "Buy":
                let buyItem = commandArray.shift();
                if (!inventoryArray.includes(buyItem)) {
                    inventoryArray.push(buyItem);
                }
                break;
            case "Trash":
                let trashItem = commandArray.shift();
                if (inventoryArray.includes(trashItem)) {
                    inventoryArray = 
                    inventoryArray.filter((element) => element != trashItem);
                    inventoryArray = 
                    inventoryArray.filter((element) => !element.includes(`${trashItem}:`));
                }
                break;
            case "Repair":
                let repairItem = commandArray.shift();
                if (inventoryArray.includes(repairItem)) {
                    let repairIndex = inventoryArray.findIndex(
                        (element) => element === repairItem
                    );
                    if (inventoryArray[repairIndex + 1].includes(`${repairItem}:`)) {
                        let upgraded = inventoryArray[repairIndex + 1];
                        inventoryArray.splice(repairIndex, 2);
                        inventoryArray.push(repairItem, upgraded);
                    } else {
                    inventoryArray.splice(repairIndex, 1);
                    inventoryArray.push(repairItem);
                    }
                }
                break;
            case "Upgrade":
                let upgradeArray = commandArray.shift().split("-");
                let upgradeItem = upgradeArray.shift();
                let upgrade = upgradeArray.shift();
                if (inventoryArray.includes(upgradeItem)) {
                    let upgradeIndex = inventoryArray.findIndex(
                        (element) => element === upgradeItem
                    );
                    inventoryArray.splice(
                        (upgradeIndex + 1),
                        0,
                        `${upgradeItem}:${upgrade}`
                    );
                }
                break;
        }
    }

    console.log(inventoryArray.join(" "));
}
gladiator(['SWORD Shield Spear',
'Upgrade SWORD-Steel handle'])
