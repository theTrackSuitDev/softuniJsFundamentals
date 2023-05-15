function orders(inputString, inputNum) {
    let product = inputString;
    let quantity = inputNum;
    let price = 0;
    switch (product) {
        case "coffee":
            price = 1.5;
            break;
        case "water":
            price = 1;
            break;
        case "coke":
            price = 1.4;
            break;
        case "snacks":
            price = 2;
            break;
    }

    let totalPrice = quantity * price;
    console.log(totalPrice.toFixed(2));
}
orders("coffee", 2)