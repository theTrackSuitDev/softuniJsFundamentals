function loadingBar(number) {
    let percentageString = `${number}% `;
    let bar = "[..........]";
    let barArray = bar.split("");
    let tensLoaded = number / 10;
    for (let i = 1; i <= tensLoaded; i++) {
        barArray.splice(i, 1, "%");    
    }

    let barString = barArray.join("");
    if (number < 100) {
        let finalBarString = percentageString += barString;
        console.log(finalBarString);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log(barString);
    }     

}
loadingBar(100)