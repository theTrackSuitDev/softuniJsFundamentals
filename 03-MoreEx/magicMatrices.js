function magicMatrices(input) {
    let areMagic = true;
    let rowSum = 0;
    let inputArray = input.slice();
    for (let row = 0; row < inputArray.length; row++) {
        let currentRow = inputArray[row];
        let currentRowSum = currentRow.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0
          );
        if (row === 0) {
            rowSum = currentRowSum;
        } else {
            if (currentRowSum !== rowSum) {
                areMagic = false;
                break;
            }
        }        
    }
    for (let col = 0; col < inputArray.length; col++) {
        let currentColSum = 0;
        for (let row = 0; row < inputArray.length; row++) {
           let currRow = inputArray[row];
           currentColSum += currRow[col];
        }
        if (currentColSum !== rowSum) {
            areMagic = false;
            break;
        }
    }
    console.log(areMagic);
}
magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])