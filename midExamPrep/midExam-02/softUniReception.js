function softUniReception(inputArray) {
    inputArray = inputArray.map(Number);
    let students = inputArray.pop();
    let totalCapacity = inputArray.reduce((a, b) => a + b, 0);
    let hoursNeeded = 0;
    let breakHours = 0;

    while (students > 0) {
        hoursNeeded++;
        students -= totalCapacity;
        if (students > 0 && hoursNeeded % 3 === 0) {
            breakHours++;
        }
    }

    hoursNeeded += breakHours;
    console.log(`Time needed: ${hoursNeeded}h.`);
}
softUniReception(['1','2','3','0'])