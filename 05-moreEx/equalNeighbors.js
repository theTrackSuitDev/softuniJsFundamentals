function equalNeighbors(arrayOfArrays) {
    let equalCounter = 0;
    for (let row = 0; row < arrayOfArrays.length; row++) {
        let currRow = arrayOfArrays[row];
        for (let col = 0; col < currRow.length; col++) {
            let currElement = currRow[col];
            if (currElement === currRow[col + 1]) {
                equalCounter++;
            }
            
            if (row + 1 >= arrayOfArrays.length) {
                continue;
            }

            if (currElement === arrayOfArrays[row + 1][col]) {
                equalCounter++;
            }            
        }
    }
    console.log(equalCounter);
}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])