function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetBreakCount = 0;
    let swordBreakCount = 0;
    let shieldBreakCount = 0;
    let armorBreakCount = 0;
    for (let fight = 1; fight <= lostFights; fight++) {
        if (fight % 2 === 0) {
            helmetBreakCount++;
        }
        if (fight % 3 === 0) {
            swordBreakCount++;
        }
        if (fight % 2 === 0 && fight % 3 === 0) {
            shieldBreakCount++;
        }
        if (fight % 4 === 0 && fight % 6 === 0) {
            armorBreakCount++;
        }
    }
    let totalCost = (helmetBreakCount * helmetPrice + 
        swordBreakCount * swordPrice + 
        shieldBreakCount * shieldPrice + 
        armorBreakCount * armorPrice).toFixed(2);
    console.log(`Gladiator expenses: ${totalCost} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)