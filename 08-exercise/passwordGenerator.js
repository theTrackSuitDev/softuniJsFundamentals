function passwordGenerator(inputArray) {
    let concatenated = inputArray[0].concat(inputArray[1]);
    let concatArray = concatenated.split("");
    let replacementString = inputArray[2].toUpperCase();

    let vowelsArray = ["a", "e", "i", "o", "u"];

    let replaceIndex = 0;
    concatArray.forEach((char, index) => {
        if (vowelsArray.includes(char)) {
            concatArray[index] = replacementString[replaceIndex];
            replaceIndex++;
            if (replaceIndex === replacementString.length) {
                replaceIndex = 0;
            }
        }
    });

    concatArray.reverse();

    console.log(`Your generated password is ${concatArray.join("")}`);
}
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
    ])