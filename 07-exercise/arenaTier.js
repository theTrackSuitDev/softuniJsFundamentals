function arenaTier(inputArray) {
    let gladiatorPool = [];

    for (const command of inputArray) {
        if (command === "Ave Cesar") {
            break;
        }

        let commandArray = command.split(" -> ");
        if (commandArray.length === 3) {
            let gladiator = commandArray.shift();
            let technique = commandArray.shift();
            let skill = Number(commandArray.shift());

            let currentGladiator = {
                name: gladiator,
                [technique]: skill,
            };

            let currentIndex = gladiatorPool.findIndex(
                (el) => el.name === currentGladiator.name
            );

            if (currentIndex === -1) {
                gladiatorPool.push(currentGladiator);
                currentIndex = gladiatorPool.findIndex(
                    (el) => el.name === currentGladiator.name
                );
            } else {
                if (gladiatorPool[currentIndex].hasOwnProperty(technique)) {
                    let oldSkill = gladiatorPool[currentIndex][technique];
                    let newSkill = currentGladiator[technique];
                    if (oldSkill < newSkill) {
                        gladiatorPool[currentIndex][technique] = skill;
                    }
                } else {
                    gladiatorPool[currentIndex][technique] = skill;
                }
            }
        } else {
            commandArray = command.split(" vs ");
            let gladOne = commandArray.shift();
            let gladTwo = commandArray.shift();
            let indexOne = gladiatorPool.findIndex((el) => el.name === gladOne);
            let indexTwo = gladiatorPool.findIndex((el) => el.name === gladTwo);
            if (indexOne != -1 && indexTwo != -1) {
                let gladOneCopyObj = Object.assign({}, gladiatorPool[indexOne]);
                let gladTwoCopyObj = Object.assign({}, gladiatorPool[indexTwo]);
                delete gladOneCopyObj.name;
                delete gladTwoCopyObj.name;

                let techsOne = Object.entries(gladOneCopyObj);
                let techsTwo = Object.entries(gladTwoCopyObj);

                let totalSkillOne = 0;
                let totalSkillTwo = 0;
                let loser;

                for (const techOne of techsOne) {
                    for (const techTwo of techsTwo) {
                        if (techOne[0] === techTwo[0]) {
                            totalSkillOne += techOne[1];
                            totalSkillTwo += techTwo[1];
                            break;
                        }
                    }
                }

                if (totalSkillOne > totalSkillTwo) {
                    loser = indexTwo;
                    gladiatorPool.splice(loser, 1);
                } else if (totalSkillOne < totalSkillTwo) {
                    loser = indexOne;
                    gladiatorPool.splice(loser, 1);
                }
            }
        }
    }

    for (const gladiator of gladiatorPool) {
        let gladCopyObj = Object.assign({}, gladiator);
        delete gladCopyObj.name;

        let valuesArr = Object.values(gladCopyObj);
        let totalSkill = valuesArr.reduce((a, b) => a + b, 0);

        gladiator.total = totalSkill;
    }

    gladiatorPool.sort(
        (a, b) => b.total - a.total || a.name.localeCompare(b.name)
    );

    for (const gladiator of gladiatorPool) {
        console.log(`${gladiator.name}: ${gladiator.total} skill`);
        delete gladiator.name;
        delete gladiator.total;

        let techArray = Object.entries(gladiator);
        techArray.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        techArray.forEach((element) => {
            let technique = element[0];
            let skill = element[1];
            console.log(`- ${technique} <!> ${skill}`);
        });
    }
}

arenaTier([
    "Peter -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Julius -> Heal -> 250",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 550",
    "Gladius -> Shield -> 150",
    "Peter vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Maximilian",
    "Ave Cesar",
]);