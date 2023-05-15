function arrayManipulations(inputArray) {
    let numbers = inputArray.shift().split(" ");
    numbers = numbers.map(Number);
    for (const command of inputArray) {
        let commandArray = command.split(" ");
        let action = commandArray.shift();
        switch (action) {
            case "Add":
                numbers.push(Number(commandArray[0]));
                break;
            case "Remove":
                let numToRemove = Number(commandArray[0]);
                numbers = numbers.filter(element => element !== numToRemove);
                break;
            case "RemoveAt":
                let indexToRemove = Number(commandArray[0]);
                numbers.splice(indexToRemove, 1);
                break;
            case "Insert":
                let numToInsert = Number(commandArray[0]);
                let indexToInsert = Number(commandArray[1]);
                numbers.splice(indexToInsert, 0, numToInsert);
                break;
        }
    }

    console.log(numbers.join(" "));
}
arrayManipulations([
    "4 19 2 53 6 43",
    "Add 3",
    "Remove 2",
    "RemoveAt 1",
    "Insert 8 3",
]);
