function asciiSumator(inputArray) {
    let [firstChar, secondChar, string] = inputArray;
    let asciiOne = firstChar.charCodeAt();
    let asciiTwo = secondChar.charCodeAt();
    let startAscii = Math.min(asciiOne, asciiTwo);
    let endAscii = Math.max(asciiOne, asciiTwo);
    let sum = 0;

    for (const char of string) {
        let ascii = char.charCodeAt();
        if (ascii > startAscii && ascii < endAscii) {
            sum += ascii
        }
    }

    console.log(sum);
}
asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$'])