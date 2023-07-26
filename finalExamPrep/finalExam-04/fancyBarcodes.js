function fancyBarcodes(inputArray) {
    let pattern = /[@][#]+(?<code>[A-Z][a-zA-Z0-9]{4,}[A-Z])[@][#]+/;
    let numPattern = /[0-9]/g;

    let barcodeCount = Number(inputArray.shift());
    for (let i = 0; i < barcodeCount; i++) {
        let productGroup = "00";
        let barcode = inputArray.shift();
        let match = pattern.exec(barcode);
        if (match) {
            let code = match.groups.code;
            let numbers = code.match(numPattern);
            if (numbers) {
                productGroup = "";
                numbers.forEach(element => {
                    productGroup += element;
                });
            }

            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }        
    }
}
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])