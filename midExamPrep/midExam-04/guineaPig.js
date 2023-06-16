function guineaPig(inputArray) {
    inputArray = inputArray.map(Number);
    let foodGrams = inputArray.shift() * 1000;
    let hayGrams = inputArray.shift() * 1000;
    let coverGrams = inputArray.shift() * 1000;
    let pigWeightGrams = inputArray.shift() * 1000;

    for (let i = 1; i <= 30; i++) {
        foodGrams -= 300;
        if (i % 2 === 0) {
            hayGrams -= foodGrams * 0.05;
        }

        if (i % 3 === 0) {
            coverGrams -= pigWeightGrams / 3;
        }

        if (foodGrams <= 0 || hayGrams <= 0 || coverGrams <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }  
    }

    let foodKg = foodGrams / 1000;
    let hayKg = hayGrams / 1000;
    let coverKg = coverGrams / 1000;

    console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`);
}
guineaPig(["9",
"5",
"5.2",
"1"])