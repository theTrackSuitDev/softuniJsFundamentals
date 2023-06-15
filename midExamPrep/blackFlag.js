function blackFlag(input) {
    let inputArray = input.map(Number);

    let duration = inputArray.shift();
    let dailyPlunder = inputArray.shift();
    let targetPlunder = inputArray.shift();
    let plunderGained = 0;
    for (let i = 1; i <= duration; i++){
        plunderGained += dailyPlunder;
        if (i % 3 === 0) {
            plunderGained += dailyPlunder * 0.5;
        }

        if (i % 5 === 0) {
            plunderGained *= 0.7;
        }
    }

    if (plunderGained >= targetPlunder) {
        console.log(`Ahoy! ${plunderGained.toFixed(2)} plunder gained.`);
    } else {
        let percentage = 100 - (targetPlunder - plunderGained) / (targetPlunder * 0.01)
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["10",
"20",
"380"])