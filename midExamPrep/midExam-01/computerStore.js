function computerStore(inputArray) {
    let totalPrice = 0;
    let taxes = 0;
    let clientType = inputArray.pop(); 
    let isSpecial = false;
    inputArray = inputArray.map(Number);

    if (clientType === "special") {
        isSpecial = true;
    }

    for (const price of inputArray) {
        if (price < 0) {
            console.log("Invalid price!");
            continue;
        }

        totalPrice += price;
        taxes += price * 0.2;
    }

    if (totalPrice === 0) {
        console.log("Invalid order!");
        return;
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("-----------");

    let totalWithTaxes = totalPrice + taxes;
    if (isSpecial) {
        totalWithTaxes *= 0.9;
    }
    console.log(`Total price: ${totalWithTaxes.toFixed(2)}$`);
}
computerStore([
    'regular'
    ])