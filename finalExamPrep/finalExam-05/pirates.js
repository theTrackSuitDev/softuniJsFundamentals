function pirates(inputArray) {
    let towns = {};
    let nextCommand = inputArray.shift();
    while (nextCommand !== "Sail") {
        let [town, population, gold] = nextCommand.split("||");
        if (towns.hasOwnProperty(town)) {
            towns[town].population += Number(population);
            towns[town].gold += Number(gold);
        } else {
            towns[town] = {};
            towns[town].population = Number(population);
            towns[town].gold = Number(gold);
        }

        nextCommand = inputArray.shift();
    }

    nextCommand = inputArray.shift();
    while (nextCommand !== "End") {
        let commandArray = nextCommand.split("=>");
        let action = commandArray.shift();
        let town = commandArray.shift();
        switch (action) {
            case "Plunder":
                let [peopleKilled, goldStolen] = commandArray.map(Number);
                towns[town].population -= peopleKilled;
                towns[town].gold -= goldStolen;
                console.log(`${town} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);

                if (towns[town].population <= 0 || towns[town].gold <= 0) {
                    delete towns[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;
            case "Prosper":
                let goldGained = Number(commandArray.shift());
                if (goldGained < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                    nextCommand = inputArray.shift();
                    continue;
                }

                towns[town].gold += goldGained;
                console.log(`${goldGained} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`);
                break;
        
            default:
                break;
        }

        nextCommand = inputArray.shift();
    }

    let townsArray = Object.entries(towns);
    if (townsArray.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${townsArray.length} wealthy settlements to go to:`);
        townsArray.forEach(town => {
            console.log(`${town[0]} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold} kg`);
        });
    }
}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])