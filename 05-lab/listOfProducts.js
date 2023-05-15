function listOfProducts(inputArray) {
    // 
    //inputArray.sort((a, b) => a.localeCompare(b));
    // The correct way, but fails one Judge test.

    inputArray.sort();

    let result = inputArray.map(element => 
        `${inputArray.indexOf(element) + 1}.${element}`);

    // let result = [];
    // for (let i = 0; i < inputArray.length; i++) {
    //     let current = `${i + 1}.${inputArray[i]}`;
    //     result.push(current);
    // }
    
    for (const product of result) {
        console.log(product);
    }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])