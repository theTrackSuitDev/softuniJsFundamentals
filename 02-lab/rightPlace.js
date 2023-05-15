function rightPlace(incompleteStr, missingChar, completeString) {
    let replacementResult = "";
    for (let i = 0; i < incompleteStr.length; i++) {
        let currChar = incompleteStr[i];
        currChar === "_"
            ? replacementResult += missingChar
            : replacementResult += currChar;
    }
        replacementResult === completeString
            ? console.log("Matched")
            : console.log("Not Matched");    
}
rightPlace('Str_ng', 'i', 'String')