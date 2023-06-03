function partyTime(inputArray) {
    let vipInvited = [];
    let regInvited = [];

    let command = inputArray.shift();
    while (command != "PARTY") {
        if (command.charCodeAt(0) < 65) {
            vipInvited.push(command);
        } else {
            regInvited.push(command);
        }
        command = inputArray.shift();
    }

    for (const name of inputArray) {
        if (vipInvited.includes(name)) {
            let indexToRemove = vipInvited.findIndex(el => el === name);
            vipInvited.splice(indexToRemove, 1);
        }

        if (regInvited.includes(name)) {
            let indexToRemove = regInvited.findIndex(el => el === name);
            regInvited.splice(indexToRemove, 1);
        }
    }

    let count = (vipInvited.length) + (regInvited.length);

    console.log(count);

    for (const name of vipInvited) {
        console.log(name);
    }

    for (const name of regInvited) {
        console.log(name);
    }
}
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'])