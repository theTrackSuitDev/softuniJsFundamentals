function convertToJson(firstName, lastName, hairColor) {
    let personObject = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    console.log(JSON.stringify(personObject)); 
}
convertToJson('George', 'Jones',
'Brown')