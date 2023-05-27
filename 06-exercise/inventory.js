function inventory(inputArray) {
    let heroesArray = [];
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items; 
        }
    }

    while (inputArray.length > 0) {
        let currentCommand = inputArray.shift();
        let [name, level, items] = currentCommand.split(" / ");
        let newHero = new Hero(name, Number(level), items);
        heroesArray.push(newHero);
    }

    heroesArray.sort((a, b) => a.level - b.level);
    
    heroesArray.forEach((element) => {
        for (const key in element) {
            switch (key) {
                case "name":
                    console.log(`Hero: ${element[key]}`);
                    break;
            
                default:
                    console.log(`${key} => ${element[key]}`);
                    break;
            }
        }
    });
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])