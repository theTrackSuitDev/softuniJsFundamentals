function oddOccurrences(inputString) {
    let arrayToCheck = inputString.toLowerCase().split(" ");
    let countMap = new Map();
    arrayToCheck.forEach(element => {
        if (countMap.has(element)) {
            let currCount = countMap.get(element);
            countMap.set(element, currCount + 1);
        } else {
            countMap.set(element, 1);
        }
    });

    let resultString = "";

    countMap.forEach((count, word) => {
        if (count %2 != 0) {
            resultString += `${word} `;
        }
    });

    console.log(resultString);
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')