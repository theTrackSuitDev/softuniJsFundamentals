function shoppingList(input = []) {
    let initialList = input.shift();
    initialList = initialList.split("!");
    let nextCommand = input.shift();
    while (nextCommand != "Go Shopping!") {
        let action = nextCommand.split(" ")[0];
        switch (action) {
            case "Urgent":
                let urgentItem = nextCommand.split(" ")[1];
                if (!initialList.includes(urgentItem)) {
                    initialList.unshift(urgentItem);
                }
                break;
            case "Unnecessary":
                let itemToDiscard = nextCommand.split(" ")[1];
                let index = initialList.findIndex(el => el === itemToDiscard);
                if (index != -1) {
                    initialList.splice(index, 1);
                }
                break;
            case "Correct":
                let oldItem = nextCommand.split(" ")[1];
                let newItem = nextCommand.split(" ")[2];
                let oldIndex = initialList.findIndex(el => el === oldItem);
                if (oldIndex != -1) {
                    initialList.splice(oldIndex, 1, newItem);
                }
                break;
            case "Rearrange":
                let itemToMove = nextCommand.split(" ")[1];
                let indexToMove = initialList.findIndex(el => el === itemToMove);
                if (indexToMove != -1) {
                    initialList.splice(indexToMove, 1);
                    initialList.push(itemToMove);
                }
                break;
        }

        nextCommand = input.shift();
    }

    console.log(initialList.join(", "));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
