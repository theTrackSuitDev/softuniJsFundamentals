function phoneBook(arrayOfStrings) {
    let phoneBookObject = {};
    for (const entry of arrayOfStrings) {
        let namePhoneArray = entry.split(" ");
        let name = namePhoneArray.shift();
        let phone = namePhoneArray.shift();
        phoneBookObject[name] = phone;
    }

    for (const name in phoneBookObject) {
        console.log(`${name} -> ${phoneBookObject[name]}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])