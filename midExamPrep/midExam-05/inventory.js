function inventory(inputArray) {
    let itemsArray = inputArray.shift().split(", ");
    
    let currentCommand = inputArray.shift();
    while (currentCommand != "Craft!") {
        let [action, item] = currentCommand.split(" - ");

        switch (action) {
            case "Collect":
                if (!itemsArray.includes(item)) {
                    itemsArray.push(item);
                }
                break;
            case "Drop":
                itemsArray = itemsArray.filter(el => el !== item);
                break;
            case "Combine Items":
                let [oldItem, newItem] = item.split(":");
                let index = itemsArray.indexOf(oldItem);
                if (index != -1) {
                    itemsArray.splice(index + 1, 0, newItem);
                }
                break;
            default:
                let renewIndex = itemsArray.indexOf(item);
                if (renewIndex != -1) {
                    itemsArray.splice(renewIndex, 1);
                    itemsArray.push(item);
                }
                break;
        }

        currentCommand = inputArray.shift();
    }

    console.log(itemsArray.join(", "));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])