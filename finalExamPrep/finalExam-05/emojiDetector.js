function emojiDetector(inputArray) {
    let [inputString] = inputArray;
    let emojiPattern = /([:]{2}|[\*]{2})(?<emoji>[A-Z]{1}[a-z]{2,})\1/g;
    let numPattern = /[0-9]/g;

    let numbersArray = inputString.match(numPattern);
    let threshold = numbersArray.reduce((a, b) => a * b, 1);
    
    let validEmojis = inputString.match(emojiPattern);
    if (!validEmojis) {
        validEmojis.length = 0;
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`);

    let coolEmojis = [];

    for (const match of validEmojis) {
        let currentEmoji = match.slice(2, -2).split("");
        let value = 0;
        for (const char of currentEmoji) {
            value += char.charCodeAt();
        }

        if (value > threshold) {
            coolEmojis.push(match);
        }
    }

    coolEmojis.forEach(element => {
        console.log(element);
    });

}
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])