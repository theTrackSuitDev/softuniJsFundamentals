function treasureFinder(inputArray) {
    let result = [];
    let keyString = inputArray.shift();
    let keyArray = keyString.split(" ").map(Number);

    let command = inputArray.shift();
    while (command != "find") {
        let resultString = "";
        let keyIndex = 0;
        for (const char of command) {
            let charAscii = char.charCodeAt();
            let key = keyArray[keyIndex];
            let newChar = String.fromCharCode(charAscii - key);
            resultString += newChar;
            keyIndex++;
            if (keyIndex === keyArray.length) {
                keyIndex = 0;
            }
        }

        result.push(resultString);
        command = inputArray.shift();
    }

    result.forEach(element => {
        console.log(`Found ${getType(element)} at ${getCoord(element)}`);
    });

    function getType(string) {
        let startIndex = string.indexOf("&") + 1;
        let endIndex = string.indexOf("&", startIndex);
        let type = string.slice(startIndex, endIndex);
        return type;
    }

    function getCoord(string) {
        let startIndex = string.indexOf("<") + 1;
        let endIndex = string.indexOf(">");
        let coord = string.slice(startIndex, endIndex);
        return coord;
    }

}
treasureFinder(["1 4 2 5 3 2 1",
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
"find"])