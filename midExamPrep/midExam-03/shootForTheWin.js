function shootForTheWin(inputArray) {
    let targets = inputArray.shift();
    targets = targets.split(" ").map(Number);
    let targetsShot = 0;

    let nextCommand = inputArray.shift();
    while (nextCommand != "End") {
        let indexToShoot = Number(nextCommand);
        if (indexToShoot < targets.length && targets[indexToShoot] != -1) {
            targetValue = targets[indexToShoot];
            targets[indexToShoot] = -1;
            targetsShot++;
            targets.forEach((element, index, array) => {
                if (element != -1) {
                    element > targetValue
                        ? array[index] -= targetValue
                        : array[index] += targetValue;
                }
            });
        }

        nextCommand = inputArray.shift();
    }

    console.log(`Shot targets: ${targetsShot} -> ${targets.join(" ")}`);
}
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])