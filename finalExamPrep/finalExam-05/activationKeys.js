function activationKeys(inputArray) {
    let rawKey = inputArray.shift();
    let nextCommand = inputArray.shift();

    while (nextCommand !== "Generate") {
        let commandArray = nextCommand.split(">>>");
        let action = commandArray.shift();

        switch (action) {
            case "Contains":
                let substring = commandArray.shift();
                rawKey.indexOf(substring) === -1
                    ? console.log("Substring not found!")
                    : console.log(`${rawKey} contains ${substring}`);
                break;
            case "Flip":
                let option = commandArray.shift();
                let startFlip = Number(commandArray.shift());
                let endFlip = Number(commandArray.shift());

                let firstPart = rawKey.slice(0, startFlip);
                let lastPart = rawKey.slice(endFlip);
                let flipString = rawKey.slice(startFlip, endFlip);
                if (option === "Upper") {
                    flipString = flipString.toUpperCase();
                } else if (option === "Lower") {
                    flipString = flipString.toLowerCase();
                }
                
                rawKey = firstPart + flipString + lastPart;
                console.log(rawKey);
                break;
            case "Slice":
                let startIndex = Number(commandArray.shift());
                let endIndex = Number(commandArray.shift());
                let firstSub = rawKey.slice(0, startIndex);
                let endSub = rawKey.slice(endIndex);
                rawKey = firstSub + endSub;
                console.log(rawKey);
                break;
        }        
        
        nextCommand = inputArray.shift();
    }

    console.log(`Your activation key is: ${rawKey}`);
}
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])