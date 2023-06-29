function serializeString(inputArray) {
    let string = inputArray[0];
    let checkedChars = [];

    for (let i = 0; i < string.length; i++) {
        let currChar = string[i];

        if (!checkedChars.includes(currChar)) {
            checkedChars.push(currChar);
            let charIndexes = [];
            let index = string.indexOf(currChar);
            
            while (index != -1) {
                charIndexes.push(index);
                index = string.indexOf(currChar, index + 1);
            }

            console.log(`${currChar}:${charIndexes.join("/")}`);
        }
        
    }
}
serializeString(["avjavamsdmcalsdm"])