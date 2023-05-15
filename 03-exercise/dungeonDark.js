function dungeonDark(roomsString) {
    let roomsArray = roomsString.toString().split("|");
    let health = 100;
    let coins = 0;
    let isAlive = true;
    for (const i in roomsArray) {
        let currRoomArray = roomsArray[i].split(" ");
        let currRoom = Number(i) + 1;
        let currCommand = currRoomArray[0];
        let currValue = Number(currRoomArray[1]);
        switch (currCommand) {
            case "potion":
                let healNeed = 100 - health;
                let healedWith = 0;
                if (healNeed >= currValue) {
                    healedWith = currValue;
                    health += currValue;
                } else {
                    healedWith = healNeed;
                    health = 100;
                }
                console.log(`You healed for ${healedWith} hp.`);
                console.log(`Current health: ${health} hp.`);          
                break;
            case "chest":
                coins += currValue;
                console.log(`You found ${currValue} coins.`);
                break;
            default:
                let monster = currCommand;
                health -= currValue;
                if (health > 0) {
                    console.log(`You slayed ${monster}.`);
                } else {
                    isAlive = false;
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${currRoom}`);
                }
                break;
        }
        if (!isAlive) {
            break;
        }
    }
    if (isAlive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")