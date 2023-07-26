function heroesOfCodeAndLogic(inputArray) {
    class Hero {
        constructor(name, hp, mp) {
            this.name = name;
            this.hp = Number(hp);
            this.mp = Number(mp);
        }
    }

    let heroes = [];
    let heroesCount = Number(inputArray.shift());
    for (let i = 0; i < heroesCount; i++) {
        let nextHero = inputArray.shift().split(" ");
        let[name, hp, mp] = nextHero;
        nextHero = new Hero(name, hp, mp);
        heroes.push(nextHero);        
    }

    let nextCommand = inputArray.shift();
    while (nextCommand !== "End") {
        let commandArray = nextCommand.split(" - ");
        let action = commandArray.shift();
        let heroName = commandArray.shift();
        let heroIndex = heroes.findIndex(el => el.name === heroName);

        switch (action) {
            case "CastSpell":
                let mpNeeded = Number(commandArray.shift());
                let spellName = commandArray.shift();
            
                if (heroes[heroIndex].mp >= mpNeeded) {
                    heroes[heroIndex].mp -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroIndex].mp} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;
            case "TakeDamage":
                let damage = Number(commandArray.shift());
                let attacker = commandArray.shift();
                heroes[heroIndex].hp -= damage;
                if (heroes[heroIndex].hp > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroIndex].hp} HP left!`);
                } else {
                    heroes.splice(heroIndex, 1);
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;
            case "Recharge":
                let mpToAdd = Number(commandArray.shift());
                let mpMissing = 200 - heroes[heroIndex].mp;

                if (mpMissing < mpToAdd) {
                    heroes[heroIndex].mp = 200;
                    mpToAdd = mpMissing;
                } else {
                    heroes[heroIndex].mp += mpToAdd;
                }

                console.log(`${heroName} recharged for ${mpToAdd} MP!`);
                break;
            case "Heal":
                let hpToAdd = Number(commandArray.shift());
                let hpMissing = 100 - heroes[heroIndex].hp;

                if (hpMissing < hpToAdd) {
                    heroes[heroIndex].hp = 100;
                    hpToAdd = hpMissing;
                } else {
                    heroes[heroIndex].hp += hpToAdd;
                }

                console.log(`${heroName} healed for ${hpToAdd} HP!`);
                break;
        
            default:
                break;
        }

    nextCommand = inputArray.shift();   
    }

    heroes.forEach(hero => {
        console.log(`${hero.name}\n  HP: ${hero.hp}\n  MP: ${hero.mp}`);
    });
}
heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ])