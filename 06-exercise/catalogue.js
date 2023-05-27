function catalogue(productsArray) {
    let catalogueArray = [];
    class Product {
        constructor(product, price) {
            this.product = product;
            this.price = Number(price);
        }
    }

    while (productsArray.length > 0) {
        let currentCommand = productsArray.shift();
        let [product, price] = currentCommand.split(" : ");
        let currentProduct = new Product(product, price);
        catalogueArray.push(currentProduct);
    }

    catalogueArray.sort((a, b) => {
        a = a.product;
        b = b.product;
        return a.localeCompare(b);
    });

    let firstCapital = catalogueArray[0].product.slice(0, 1);
    console.log(firstCapital);
    for (let i = 0; i < catalogueArray.length; i++) {
        let currentCapital = catalogueArray[i].product.slice(0, 1);
        if (currentCapital === firstCapital) {
            console.log(`  ${catalogueArray[i].product}: ${catalogueArray[i].price}`);
        } else {
            firstCapital = currentCapital;
            console.log(firstCapital);
            console.log(`  ${catalogueArray[i].product}: ${catalogueArray[i].price}`);
        }
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])