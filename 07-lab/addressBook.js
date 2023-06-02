function addressBook(inputArray) {
    let addressBookArray = [];

    class AddressEntry {
        constructor(name, address) {
            this.name = name;
            this.address = address;
        }
    }

    for (const entry of inputArray) {
        let [name, address] = entry.split(":");
        let isIncluded = false;
        for (const element of addressBookArray) {
            if (element.name === name) {
                element.address = address;
                isIncluded = true;
            }
        }
        
        if (!isIncluded) {
            let currentEntry = new AddressEntry(name, address);
            addressBookArray.push(currentEntry); 
        } 
    }

    addressBookArray.sort((a, b) => {
        a = a.name;
        b = b.name;
        return a.localeCompare(b);
    });

    for (const object of addressBookArray) {
        console.log(`${object.name} -> ${object.address}`);
    }
}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])