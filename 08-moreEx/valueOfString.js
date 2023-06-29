function valueOfString(inputArray) {
    let [string, target] = inputArray;
    let total = 0;

    switch (target) {
        case "UPPERCASE":
            for (const char of string) {
                let upperAscii = char.charCodeAt();
                if (upperAscii > 64 && upperAscii < 91) {
                    total += upperAscii;
                } 
            }
            break;
    
        default:
            for (const char of string) {
                let lowerAscii = char.charCodeAt();
                if (lowerAscii > 96 && lowerAscii < 123) {
                    total += lowerAscii;
                } 
            }
            break;
    }

    console.log(`The total sum is: ${total}`);
}
valueOfString(['AC/DC',
'UPPERCASE'])