function minerTask(inputArray) {
    let resultObject = {};
    while (inputArray.length > 0) {
        let resource = inputArray.shift();
        let quantity = Number(inputArray.shift());

        if (!resultObject.hasOwnProperty(resource)) {
            resultObject[resource] = quantity;
        } else {
            resultObject[resource] += quantity;
        }
    }

    let resultArray = Object.entries(resultObject);

    resultArray.forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])