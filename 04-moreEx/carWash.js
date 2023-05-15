function carWash(inputArray) {
    let commandArray = inputArray.slice();
    let cleanProgress = 0;

    for (const command of commandArray) {
        switch (command) {
            case "soap":
                cleanProgress += 10;
                break;
            case "water":
                cleanProgress *= 1.2;
                break;
            case "vacuum cleaner":
                cleanProgress *= 1.25;
                break;
            case "mud":
                cleanProgress *= 0.9;
                break;                  
        }
    }

    if (cleanProgress > 100) {
        cleanProgress = 100;
    }

    console.log(`The car is ${cleanProgress.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])