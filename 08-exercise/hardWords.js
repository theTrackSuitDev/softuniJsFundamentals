function hardWords(inputArray) {
    let string = inputArray[0];
    let wordsArray = inputArray[1];

    let stringArray = string.split(" ");

    stringArray.forEach((element, index) => {
        if (element.startsWith("_")) {
            let length = 0;
            for (const char of element) {
                if (char === "_") {
                    length++;
                }
            }
            for (let i = 0; i < wordsArray.length; i++) {
                if (length === wordsArray[i].length) {
                    let newWord = "";
                    for (let k = 0; k < element.length; k++) {
                        if (element[k] === "_") {
                            newWord += wordsArray[i][k];
                        } else {
                            newWord += element[k]
                        }  
                    }
                    
                    stringArray[index] = newWord;
                    break;
                }   
            }
        }
    });

    console.log(stringArray.join(" "));
    
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])