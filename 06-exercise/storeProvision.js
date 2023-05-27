function storeProvision(stockArray, orderArray) {
    let finalStockArray = [];
    class Product {
        constructor(item, quantity) {
        this.product = item;
        this.quantity = quantity;
        }
    }

    while (stockArray.length > 0) {
        let item = stockArray.shift();
        let quantity = Number(stockArray.shift());
        let currentProduct = new Product(item, quantity);
        finalStockArray.push(currentProduct);
    }

    while (orderArray.length > 0) {
        let item = orderArray.shift();
        let quantity = Number(orderArray.shift());

        let searchCurrent = (element) => element.product === item;
        let containsCurrent = finalStockArray.findIndex(searchCurrent);
        
        if (containsCurrent != -1) {
            finalStockArray[containsCurrent].quantity += quantity;
        } else {
            let currentProduct = new Product(item, quantity);
            finalStockArray.push(currentProduct); 
        }       
    }

    for (const item of finalStockArray) {
        console.log(`${item.product} -> ${item.quantity}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])