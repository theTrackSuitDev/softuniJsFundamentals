function arrayManipulator(numArray, commandArray) {
    for (const command of commandArray) {
        let currentCommandArr = command.split(" ");
        let commandType = currentCommandArr.shift();
        switch (commandType) {
            case "add":
                let index = Number(currentCommandArr.shift());
                let elementToAdd = Number(currentCommandArr.shift());
                numArray.splice(index, 0, elementToAdd);
                break;
            case "addMany":
                let indexMany = Number(currentCommandArr.shift());
                while (currentCommandArr.length > 0) {
                    let elementToAdd = Number(currentCommandArr.pop());
                    numArray.splice(indexMany, 0, elementToAdd);
                }
                break;
            case "contains":
                let elementToFind = Number(currentCommandArr.shift());
                console.log(
                    numArray.findIndex((element) => element === elementToFind)
                );
                break;
            case "remove":
                let removeIndex = Number(currentCommandArr.shift());
                numArray.splice(removeIndex, 1);
                break;
            case "shift":
                let positions = Number(currentCommandArr.shift());
                for (let i = 0; i < positions; i++) {
                   let elementToShift = numArray.shift();
                   numArray.push(elementToShift);
                }
                break;
            case "sumPairs":
                let resultArray = [];
                while (numArray.length > 0) {
                    let numOne = numArray.shift();
                    let numTwo = numArray.shift();
                    if (numTwo === undefined) {
                        numTwo = 0;
                    }
                    let sum = numOne + numTwo;
                    resultArray.push(sum);
                }
                numArray = resultArray;
                break; 
            default: 
            // Handles the "print" command.
                console.log(`[ ${numArray.join(", ")} ]`);
                break;
        }
    }
}
arrayManipulator([1, 2, 3],
    ['sumPairs', "print"])