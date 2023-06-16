function movingTarget(inputArray) {
    let targets = inputArray.shift();
    targets = targets.split(" ").map(Number);

    let nextCommand = inputArray.shift();
    while (nextCommand != "End") {
        let [action, index, value] = nextCommand.split(" ");
        index = Number(index);
        value = Number(value);
        switch (action) {
            case "Shoot":
                if (targets[index]) {
                    targets[index] -= value;
                }

                if (targets[index] <= 0) {
                    targets.splice(index, 1)
                }
                
                break;

            case "Add":
                if (targets[index]) {
                    targets.splice(index, 0, value)
                } else {
                    console.log("Invalid placement!");
                }

                break;

            case "Strike":
                if (value > index || 
                    index + value > targets.length - 1) {
                    console.log("Strike missed!");
                } else {
                    targets.splice((index - value), (value * 2 + 1));
                }

                break;
        }

        nextCommand = inputArray.shift();
    }

    console.log(targets.join("|"));
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])