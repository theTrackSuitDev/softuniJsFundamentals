function printDna(dnaLength) {
    let letterPatternArray = ["AT", "CG", "TT", "AG", "GG"];
    let rowPatternArray = ["**??**", "*?--?*", "?----?", "*?--?*"];

    for (let i = 0; i < dnaLength; i++) {
        let currentRowArray = [];
        if (i < 4) {
            currentRowArray[0] = rowPatternArray[i];
        } else {
            currentRowArray[0] = rowPatternArray[i % 4];
        }

        let currentLettersArray = [];
        if (i < 5) {
            currentLettersArray[0] = letterPatternArray[i];
        } else {
            currentLettersArray[0] = letterPatternArray[i % 5];
        }

        let lettersString = currentLettersArray[0];
        let lettersArray = lettersString.split("");

        let rowString = currentRowArray[0];
        let rowArray = rowString.split("");

        const isQuestionMark = (element) => element === "?";

        rowArray.splice(rowArray.findIndex(isQuestionMark), 1, lettersArray[0]);
        rowArray.splice(rowArray.findIndex(isQuestionMark), 1, lettersArray[1]);

        console.log(rowArray.join(""));
    }
}
printDna(10);
