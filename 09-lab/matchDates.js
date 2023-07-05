function dates(inputArray) {
    let inputDates = inputArray[0];
    let pattern = /\b(?<day>[0-9][0-9])(?<separator>[-.//])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4}\b)/g;

    let validDatesObj = inputDates.matchAll(pattern);

    for (const date of validDatesObj) {
        console.log(`Day: ${date.groups.day}, Month: ${date.groups.month}, Year: ${date.groups.year}`);
    }
}
dates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])