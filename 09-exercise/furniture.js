function furniture(inputArray) {
    let furnitureBought = [];
    let totalPaid = 0;

    let pattern =
        />>(?<item>[A-Z][A-Za-z]+)<<(?<price>[1-9]\d*(\.\d+)?)!(?<quantity>\d+)/;

    let currentLine = inputArray.shift();

    while (currentLine != "Purchase") {
        let command = currentLine.match(pattern);
        if (command) {
            furnitureBought.push(command.groups.item);
            totalPaid +=
                Number(command.groups.price) * Number(command.groups.quantity);
        }

        currentLine = inputArray.shift();
    }

    console.log("Bought furniture:");
    furnitureBought.forEach((element) => {
        console.log(element);
    });

    console.log(`Total money spend: ${totalPaid.toFixed(2)}`);
}
furniture([
    ">>Laptop<<312.2323!3",
    ">>TV<<300.21314!5",
    ">Invalid<<!5",
    ">>TV<<300.21314!20",
    ">>Invalid<!5",
    ">>TV<<30.21314!5",
    ">>Invalid<<!!5",
    "Purchase",
]);
