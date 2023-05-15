function stepPyramid(side, increment) {
    let baseSide = side;
    let rowHeight = increment;
    
    let rowCounter = 1;
    for (let i = baseSide; i > 2; i -= 2) {
        rowCounter++;
    }
    let finalHeight = Math.floor(rowCounter * rowHeight);

    let stoneCounter = 0;
    let marbleCounter = 0;
    let lapisCounter = 0;
    let goldCounter = 0;
    
    for (let i = 1; i <= rowCounter; i++) {
        if (i == rowCounter) {
            goldCounter += baseSide * baseSide * increment;
        } else if (i % 5 == 0) {
            lapisCounter += (baseSide * 4 - 4) * increment;
            stoneCounter += ((baseSide * baseSide) - 
            (baseSide * 4 - 4)) * increment;
            baseSide -= 2;
        } else {
            marbleCounter += (baseSide * 4 - 4) * increment;
            stoneCounter += ((baseSide * baseSide) - 
            (baseSide * 4 - 4)) * increment;
            baseSide -= 2;
        }        
    }
    console.log(`Stone required: ${Math.ceil(stoneCounter)}`);
    console.log(`Marble required: ${Math.ceil(marbleCounter)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisCounter)}`);
    console.log(`Gold required: ${Math.ceil(goldCounter)}`);
    console.log(`Final pyramid height: ${finalHeight}`);
}
stepPyramid(11, 1)