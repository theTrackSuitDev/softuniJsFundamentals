function airPollution(map, forces) {
    for (let i = 0; i < 5; i++) {
        let currElement = map[i];
        currElement = currElement.split(" ");
        currElement = currElement.map(Number);
        map.splice(i, 1, currElement);
    }

    function breeze(map, row) {
        for (let index = 0; index < 5; index++) {
            map[row][index] -= 15;
            if (map[row][index] < 0) {
                map[row][index] = 0;
            }
        }
    }

    function gale(map, col) {
        for (let index = 0; index < 5; index++) {
            map[index][col] -= 20;
            if (map[index][col] < 0) {
                map[index][col] = 0;
            }
        }
    }

    function smog(map, value) {
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                map[row][col] += value;
            }
        }
    }

    for (let i = 0; i < forces.length; i++) {
        let currCommand = forces[i];
        let commandArray = currCommand.split(" ");
        let currForce = commandArray[0];
        let forceValue = Number(commandArray[1]);
        switch (currForce) {
            case "breeze":
                breeze(map, forceValue);
                break;
            case "gale":
                gale(map, forceValue);
                break;
            case "smog":
                smog(map, forceValue);
                break;
        }
    }

    let pollutedArray = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (map[row][col] >= 50) {
                pollutedArray.push(`[${row}-${col}]`);
            }
        }
    }

    if (pollutedArray.length > 0) {
        console.log(`Polluted areas: ${pollutedArray.join(", ")}`);
    } else {
        console.log("No polluted areas");
    }
}
airPollution(["5 7 72 14 4",
  "41 35 37 27 33",
  "23 16 27 42 12",
  "2 20 28 39 14",
  "16 34 31 10 24"],
["breeze 1", "gale 2", "smog 25"])
