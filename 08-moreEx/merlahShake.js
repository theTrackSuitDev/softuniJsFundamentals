function merlahShake(inputArray) {
    let [string, pattern] = inputArray;

    while (pattern.length > 0) {
        let occCount = 0;
        let indexes = [];

        let occIndex = string.indexOf(pattern);
        while (occIndex != -1) {
            indexes.push(occIndex);
            occCount++;
            occIndex = string.indexOf(pattern, occIndex + 1);
        }

        if (occCount > 1) {
            string = string.split("");
            string.splice(indexes[0], pattern.length);
            string.splice((indexes[indexes.length - 1] - pattern.length), pattern.length);
            string = string.join("");

            let indexToRemove = Math.floor(pattern.length / 2);
            pattern = pattern.split("");
            pattern.splice(indexToRemove, 1);
            pattern = pattern.join("");

            console.log("Shaked it.");
        } else {
            console.log("No shake.");
            console.log(string);
            return;
        }
    }

    console.log("No shake.");
    console.log(string);
}
merlahShake(['##mtm!!mm.mm*mtm.#',
'mtm'])