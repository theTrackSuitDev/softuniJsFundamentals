function imitationGame(inputArray) {
    let initialMessage = inputArray.shift();
    let nextCommand = inputArray.shift();
    while (nextCommand != "Decode") {
        let commandArray = nextCommand.split("|");
        let action = commandArray.shift();
        switch (action) {
            case "Move":
                let number = Number(commandArray.shift());
                let partToMove = initialMessage.slice(0, number);
                initialMessage = initialMessage.slice(number);
                initialMessage += partToMove;
                break;
            case "Insert":
                let [index, value] = commandArray;
                index = Number(index);
                let messageArray = initialMessage.split("");
                messageArray.splice(index, 0, value);
                initialMessage = messageArray.join("");
                break;
            case "ChangeAll":
                let [sub, replacement] = commandArray;
                let indexOfSub = initialMessage.indexOf(sub);
                while (indexOfSub != -1) {
                    let array = initialMessage.split("");
                    array.splice(indexOfSub, sub.length, replacement);
                    initialMessage = array.join("");
                    indexOfSub = initialMessage.indexOf(sub);
                }
                break;
        }

        nextCommand = inputArray.shift();
    }
    console.log(`The decrypted message is: ${initialMessage}`);
}
imitationGame(
    [
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode',
      ]
)