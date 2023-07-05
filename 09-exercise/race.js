function race(inputArray) {
    let runnersArray = inputArray.shift().split(", ");
    let runnersObj = {};

    runnersArray.forEach(element => {
        runnersObj[element] = 0;
    });

    let letterRegEx = /[A-Za-z]/g;
    let numbersRegEx = /[0-9]/g;

    let command = inputArray.shift();

    while (command != "end of race") {
        let name = command.match(letterRegEx).join("");

        if (runnersObj.hasOwnProperty(name)) {
            let numbersArray = command.match(numbersRegEx).map(Number);

            let distance = numbersArray.reduce((a, b) => a + b, 0);
            runnersObj[name] += distance;
        }
        
        command = inputArray.shift();
    }

    let resultArray = Object.entries(runnersObj).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${resultArray[0][0]}`);
    console.log(`2nd place: ${resultArray[1][0]}`);
    console.log(`3rd place: ${resultArray[2][0]}`);
}
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])