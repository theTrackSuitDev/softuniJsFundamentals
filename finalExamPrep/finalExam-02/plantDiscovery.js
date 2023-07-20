function plantDiscovery(inputArray) {
    let plantsCount = Number(inputArray.shift());
    let plants = [];
    class Plant {
        constructor(name, rarity) {
            this.name = name;
            this.rarity = Number(rarity);
            this.rating = [];
        }
    }

    for (let i = 0; i < plantsCount; i++) {
        let [name, rarity] = inputArray.shift().split("<->");
        let plantIndex = plants.findIndex(el => el.name === name);
        if (plantIndex !== -1) {
            plants[plantIndex].rarity = Number(rarity);
        } else {
            let currentPlant = new Plant(name, rarity);
            plants.push(currentPlant);
        }
        
    }

    let nextCommand = inputArray.shift();
    while (nextCommand != "Exhibition") {
        let commandArray = nextCommand.split(": ");
        let action = commandArray.shift();
        switch (action) {
            case "Rate":
                let [plantToRate, rate] = commandArray.shift().split(" - ");
                rate = Number(rate);
                let plantIndex = plants.findIndex(el => el.name === plantToRate);
                if (plantIndex === -1) {
                    console.log("error");;
                } else {
                    plants[plantIndex].rating.push(rate);
                }
                break;
            case "Update":
                let [plantToUpdate, newRarity] = commandArray.shift().split(" - ");
                newRarity = Number(newRarity);
                let updateIndex = plants.findIndex(el => el.name === plantToUpdate);
                if (updateIndex === -1) {
                    console.log("error");;
                } else {
                    plants[updateIndex].rarity = newRarity;
                }
                break;
            case "Reset":
                let plantToReset = commandArray.shift();
                let resetIndex = plants.findIndex(el => el.name === plantToReset);
                if (resetIndex === -1) {
                    console.log("error");;
                } else {
                    plants[resetIndex].rating = [];
                }
                break;
        }
        nextCommand = inputArray.shift();
    }

    plants.forEach(element => {
        if (element.rating.length > 0) {
            let ratingSum = element.rating.reduce((a, b) => a + b, 0);
            element.rating = ratingSum / element.rating.length;
        } else {
            element.rating = 0;
        }
    });

    console.log("Plants for the exhibition:");
    plants.forEach(element => {
        console.log(`- ${element.name}; Rarity: ${element.rarity}; Rating: ${element.rating.toFixed(2)}`);
    });
}
plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])