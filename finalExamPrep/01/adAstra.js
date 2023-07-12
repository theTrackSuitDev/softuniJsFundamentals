function adAstra(inputArray) {
    let inputString = inputArray[0];
    let pattern = /([#\|])(?<item>[a-zA-Z\s]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]{1,5})\1/g; 

    let validItems = inputString.matchAll(pattern);

    let totalCalories = 0;

    for (const element of validItems) {
        totalCalories += Number(element.groups.calories);
    }
    
    let days = Math.floor(totalCalories/2000);
    console.log(`You have food to last you for: ${days} days!`);

    if (days > 0) {
        let items = inputString.matchAll(pattern);
        for (const element of items) {
            console.log(`Item: ${element.groups.item}, Best before: ${element.groups.date}, Nutrition: ${element.groups.calories}`);
        }
    }

}
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ])