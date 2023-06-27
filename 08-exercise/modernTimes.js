function modernTimes(inputString) {
    let wordsArray = inputString.split(" ");
    let specialArray = [];

    for (const word of wordsArray) {
        if (word.startsWith("#") && word.length > 1) {
            let specialWord = word.substring(1);
            let isOnlyLetters = true;

            for (let i = 0; i < specialWord.length; i++) {
                let currCharCode = specialWord.charCodeAt(i);
                if (currCharCode < 65 ||
                    currCharCode > 90 &&
                    currCharCode < 97 ||
                    currCharCode > 122) {
                    
                    isOnlyLetters = false;
                    break;
                }
            }

            if (isOnlyLetters) {
                specialArray.push(specialWord);
            }
        }
    }

    specialArray.forEach(element => {
        console.log(element);
    });
}
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')