function spiceMustFlow(staringYield) {
    let yieldPerDay = staringYield;
    let dayCounter = 0;
    let spiceMined = 0;
    while (yieldPerDay >= 100) {
        dayCounter++;
        spiceMined += yieldPerDay;
        spiceMined -= 26;
        if (spiceMined < 0) {
            spiceMined = 0
        }
        yieldPerDay -= 10;
    }
    spiceMined -= 26;
    if (spiceMined < 0) {
        spiceMined = 0
    }
    console.log(dayCounter);
    console.log(spiceMined);
}
spiceMustFlow(111)