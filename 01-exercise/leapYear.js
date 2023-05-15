function leapYear(inputNum) {
    let yearToCheck = Number(inputNum);
    if (yearToCheck % 4 == 0 && yearToCheck % 100 != 0 ||
        yearToCheck % 400 == 0) {
        console.log(`yes`);
    } else {
        console.log(`no`);
    }
}
leapYear(4)