function armies(inputArray) {
    let leaders = {};
    for (const command of inputArray) {
        if (command.includes(" arrives")) {
            let leaderName = command.split(" arrives")[0];
            leaders[leaderName] = {};
        }

        if (command.includes(": ")) {
            let leaderName = command.split(": ")[0];
            let armyInfo = command.split(": ")[1];
            let [armyName, count] = armyInfo.split(", ");
            count = Number(count);
            
            if (leaders.hasOwnProperty(leaderName)) {
                leaders[leaderName][armyName] = count;
            }
        }

        if (command.includes(" + ")) {
            let [armyName, count] = command.split(" + ");
            count = Number(count);

            for (const leader in leaders) {
                if (leaders[leader].hasOwnProperty(armyName)) {
                    leaders[leader][armyName] += count;
                }  
            }           
        }

        if (command.includes(" defeated")) {
            let fallenLeader = command.split(" defeated")[0];
            delete leaders[fallenLeader];
        }
    }

    let leaderArray = Object.entries(leaders);
    leaderArray.sort((a, b) => getTotal(b) - getTotal(a));

    leaderArray.forEach(element => {
        let total = getTotal(element);
        console.log(`${element[0]}: ${total}`);

        let armiesArray = Object.entries(element[1]);
        armiesArray.sort((a, b) => b[1] - a[1]);
        
        for (const army of armiesArray) {
            let [name, count] = army;
            console.log(`>>> ${name} - ${count}`);
        }
    });

    function getTotal(arr) {
        let total = 0;
        for (const army in arr[1]) {
            total += arr[1][army];
        }
        return total;
    }
}
armies(
    ['Rick Burr arrives', 'Findlay arrives', 
    'Rick Burr: Juard, 1500', 'Wexamp arrives', 
    'Findlay: Wexamp, 34540', 'Wexamp + 340', 
    'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']
)