function secretChat(inputArray) {
    let hiddenMessage = inputArray.shift();
    let nextCommand = inputArray.shift();

    while (nextCommand !== "Reveal") {
        let commandArray = nextCommand.split(":|:");
        let action = commandArray.shift();

        switch (action) {
            case "InsertSpace":
                let insertIndex = Number(commandArray.shift());
                let insertArray = hiddenMessage.split("");
                insertArray.splice(insertIndex, 0, " ");
                hiddenMessage = insertArray.join("");
                console.log(hiddenMessage);
                break;
            case "Reverse":
                let partToReverse = commandArray.shift();
                let reverseStart = hiddenMessage.indexOf(partToReverse);
                if (reverseStart === -1) {
                    console.log("error");
                    break;
                }

                let reverseArray = hiddenMessage.split("");
                let substringArray = reverseArray.slice(reverseStart, reverseStart + partToReverse.length);
                substringArray.reverse();
                reverseArray.splice(reverseStart, partToReverse.length);
                reverseArray = reverseArray.concat(substringArray);
                hiddenMessage = reverseArray.join("");
                console.log(hiddenMessage);
                break;
            case "ChangeAll":
                let changePart = commandArray.shift();
                let newPart = commandArray.shift();

                let changeStart = hiddenMessage.indexOf(changePart);
                while (changeStart !== -1) {
                    hiddenMessage = hiddenMessage.replace(changePart, newPart);
                    changeStart = hiddenMessage.indexOf(changePart, changeStart + newPart.length);
                }

                console.log(hiddenMessage);
                break;
        }
        nextCommand = inputArray.shift();
    }

    console.log(`You have a new text message: ${hiddenMessage}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])