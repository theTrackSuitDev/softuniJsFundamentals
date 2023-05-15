function nextDay(year, monthInput, day) {
    let month = monthInput - 1;
    let result = new Date(year, month, day + 1);
    let yearToPrint = result.getFullYear();
    let monthToPrint = result.getMonth();
    let dayToPrint = result.getDate();
    console.log(`${yearToPrint}-${monthToPrint + 1}-${dayToPrint}`);
}
nextDay(2016, 9, 30)
