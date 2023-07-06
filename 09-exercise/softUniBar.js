function softUniBar(inputArray) {
    let pattern = /^%(?<name>[A-Z][a-z]*)%[^\|\$%\.]*<(?<item>\w+)>[^\|\$%\.]*\|(?<count>\d+)\|[^\|\$%\.\d]*(?<price>[0-9]\d*(\.\d+)?)[$]$/;

    let total = 0;
    let command = inputArray.shift();
    while (command != "end of shift") {
        let checkedCommand = command.match(pattern);

        if (checkedCommand) {
            let currentTotal = Number(checkedCommand.groups.count) * Number(checkedCommand.groups.price);

            total += currentTotal;
            console.log(`${checkedCommand.groups.name}: ${checkedCommand.groups.item} - ${currentTotal.toFixed(2)}`);
        }

        command = inputArray.shift();
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])