function storage(arrayOfStrings) {
    let storageMap = new Map();
    for (const line of arrayOfStrings) {
        let [product, quantity] = line.split(" ");
        if (storageMap.has(product)) {
            let value = storageMap.get(product);
            value += Number(quantity);
            storageMap.set(product, Number(value));
        } else {
            storageMap.set(product, Number(quantity));
        }
    }

    storageMap.forEach((quantity, product) => {
        console.log(`${product} -> ${quantity}`)
    });
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])