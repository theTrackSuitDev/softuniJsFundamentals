function muOnline(roomsString) {
    let health = 100;
    let coins = 0;

    let roomsArray = roomsString.split("|");
    let bestRoom = 0;
    let isDead = false;

    while (roomsArray.length > 0) {
        if (isDead) {
            break;
        }

        bestRoom++;
        let currentRoom = roomsArray.shift();
        let [event, value] = currentRoom.split(" ");
        value = Number(value);

        switch (event) {
            case "potion":
                let healthMissing = 100 - health;
                let healed = 0;
                healthMissing >= value
                    ? healed = value
                    : healed = healthMissing;
                health += healed;

                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
        
            default:
                let monster = event;
                health -= value;
                if (health <= 0) {
                    isDead = true;
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${bestRoom}`);
                } else {
                    console.log(`You slayed ${monster}.`);
                }
                break;
        }
    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")