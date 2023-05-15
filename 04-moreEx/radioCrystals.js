function radioCrystals(inputArray) {
    let targetThickness = inputArray.shift();
    let xRayCounter = 0;

    const cut = (a) => a * 0.25;
    const lap = (a) => a * 0.8;
    const grind = (a) => a - 20;
    const etch = (a) => a - 2;
    const xRay = (a) => {
        if (xRayCounter > 0) {
            return;
        } else {
            xRayCounter++;
            return a + 1;
        }
    }

    const transportAndWash = (a) => Math.floor(a);

    function cuttingAlgorithm(currentChunk) {
        let cutCounter = 0;
        while (currentChunk / 4 >= targetThickness - 1) {
            currentChunk = cut(currentChunk);
            cutCounter++;
        }

        if (cutCounter > 0) {
            console.log(`Cut x${cutCounter}`);
            currentChunk = transportAndWash(currentChunk);
            console.log(`Transporting and washing`);
        }

        let lapCounter = 0;
        while (currentChunk * 0.8 >= targetThickness - 1) {
            currentChunk = lap(currentChunk);
            lapCounter++;
        }

        if (lapCounter > 0) {
            console.log(`Lap x${lapCounter}`);
            currentChunk = transportAndWash(currentChunk);
            console.log(`Transporting and washing`);
        }

        let grindCounter = 0;
        while (currentChunk - 20 >= targetThickness - 1) {
            currentChunk = grind(currentChunk);
            grindCounter++;
        }

        if (grindCounter > 0) {
            console.log(`Grind x${grindCounter}`);
            currentChunk = transportAndWash(currentChunk);
            console.log(`Transporting and washing`);
        }

        let etchCounter = 0;
        while (currentChunk - 2 >= targetThickness - 1) {
            currentChunk = etch(currentChunk);
            etchCounter++;
        }

        if (etchCounter > 0) {
            console.log(`Etch x${etchCounter}`);
            currentChunk = transportAndWash(currentChunk);
            console.log(`Transporting and washing`);
        }

        if (currentChunk === targetThickness - 1) {
            currentChunk = xRay(currentChunk);
            xRayCounter++;
            console.log(`X-ray x1`);
        }
        return currentChunk;
    }

    while (inputArray.length > 0) {
        let currentChunk = inputArray.shift();
        console.log(`Processing chunk ${currentChunk} microns`);
        if (currentChunk !== targetThickness) {
            currentChunk = cuttingAlgorithm(currentChunk);
        }
        
        console.log(`Finished crystal ${currentChunk} microns`);
        xRayCounter = 0;   
    }
}
radioCrystals([1375, 50000])