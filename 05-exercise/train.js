function train(arrayOfStrings) {
    let wagonsStateString = arrayOfStrings.shift();
    let wagonsStateArray = wagonsStateString.split(" ");
    wagonsStateArray = wagonsStateArray.map(Number);
    let maxCapacity = Number(arrayOfStrings.shift());
    while (arrayOfStrings.length > 0) {
        let currCommandArray = arrayOfStrings.shift().split(" ");
        if (currCommandArray.length > 1) {
            wagonsStateArray.push(Number(currCommandArray.pop()));
        } else {
            let passengersToAdd = Number(currCommandArray.shift());
            let freeWagonIndex = wagonsStateArray.findIndex(
                (element) => maxCapacity - element >= passengersToAdd
            );
            wagonsStateArray[freeWagonIndex] += passengersToAdd;
        }
    }

    console.log(wagonsStateArray.join(" "));
}
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
