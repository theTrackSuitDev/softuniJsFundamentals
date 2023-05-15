function addAndRemove(input = []) {
    let inputArray = input.slice();
    let currentNumber = 1;
    let resultArray = [];
    for (const command of inputArray) {
        switch (command) {
            case "add":
                resultArray.push(currentNumber)
                break;
            case "remove":
                resultArray.pop();
                break;
        }
        currentNumber++;
    }
    resultArray.length > 0
        ? console.log(resultArray.join(" "))
        : console.log("Empty");
}       
addAndRemove(['remove', 'remove', 'remove'])