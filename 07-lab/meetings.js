function meetings(arrayOfStrings) {
    let schedule = {};
    for (const entry of arrayOfStrings) {
        let [day, name] = entry.split(" ");
        if (schedule[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const day in schedule) {
        console.log(`${day} -> ${schedule[day]}`);
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])