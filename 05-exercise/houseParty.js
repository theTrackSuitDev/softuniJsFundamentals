function houseParty(inputArray) {
    let listOfGuests = [];
    while (inputArray.length > 0) {
        let currentCommandArray = inputArray.shift().split(" ");
        let currentName = currentCommandArray[0];
        if (!currentCommandArray.includes("not")) {
            if (listOfGuests.includes(currentName)) {
                console.log(`${currentName} is already in the list!`);
            } else {
                listOfGuests.push(currentName);
            }
        } else {
            if (listOfGuests.includes(currentName)) {
                let indexToRemove = listOfGuests.findIndex(
                    (element) => element === currentName
                );
                listOfGuests.splice(indexToRemove, 1);
            } else {
                console.log(`${currentName} is not in the list!`);
            }
        }
    }

    listOfGuests.forEach((element) => console.log(element));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);
