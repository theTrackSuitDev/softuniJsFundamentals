function arrayModifier(inputArray) {
    let numbersArray = inputArray.shift().split(" ").map(Number);
    
    let nextCommand = inputArray.shift();

    while (nextCommand != "end") {
        let [action, indexOne, indexTwo] = nextCommand.split(" ");
        indexOne = Number(indexOne);
        indexTwo = Number(indexTwo);
        switch (action) {
            case "swap":
                let itemOne = numbersArray[indexOne];
                let itemTwo = numbersArray[indexTwo];
                numbersArray[indexOne] = itemTwo;
                numbersArray[indexTwo] = itemOne;
                break;
            case "multiply":
                let firstElement = numbersArray[indexOne];
                let secondElement = numbersArray[indexTwo];
                let product = firstElement * secondElement;
                numbersArray[indexOne] = product;
                break;
        
            default:
                // Handles decrease command
                numbersArray.forEach((a, index) => {
                    numbersArray[index] -= 1;
                });
                break;
        }

        nextCommand = inputArray.shift();
    }

    console.log(numbersArray.join(", "));
}
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])