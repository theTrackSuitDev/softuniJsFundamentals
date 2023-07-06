function starEnigma(inputArray) {
    let messageCount = Number(inputArray.shift());
    let keyPattern = /[star]/gi;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 0; i < messageCount; i++) {
        let currMessage = inputArray[i];

        let key = 0;
        while ((array1 = keyPattern.exec(currMessage)) !== null) {
            key++;
        }

        let decrypted = [];
        currMessage = currMessage.split("");
        for (const char of currMessage) {
            let ascii = char.charCodeAt() - key;
            decrypted.push(String.fromCharCode(ascii));
        }

        decrypted = decrypted.join("");

        let validationPattern = /^[^@\-\!\:>]*@(?<name>[A-Za-z]+)[^@\-\!\:>]*:(?<population>[\d]+)[^@\-\!\:>]*!(?<attack>[AD])![^@\-\!\:>]*->(?<soldiers>[\d]+)[^@\-\!\:>]*$/;

        let checked = decrypted.match(validationPattern);
        if (checked) {
           let name = checked.groups.name;
           let attackType = checked.groups.attack;
           switch (attackType) {
            case "A":
                attackedPlanets.push(name);
                break;
           
            case "D":
                destroyedPlanets.push(name);
                break;
           } 
        }
    }

    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(element => {
        console.log(`-> ${element}`);
    });
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(element => {
        console.log(`-> ${element}`);
    });
}
starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR'])