function requiredReading(bookPages, pagesPerHour, daysToRead) {
    let hoursNeeded = bookPages / pagesPerHour;
    let hoursPerDay = hoursNeeded / daysToRead;
    console.log(hoursPerDay);
}
requiredReading(432,
    15 ,
    4 )