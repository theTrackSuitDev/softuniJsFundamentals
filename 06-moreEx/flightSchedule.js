function flightSchedule(inputArray) {
    let initialSchedule = inputArray[0].slice();
    let flightChanges = inputArray[1].slice();
    let statusToCheck = inputArray[2][0];

    class Flight {
        constructor(number, destination) {
            this.number = number;
            this.destination = destination;
        }
    }

    let scheduleArray = [];
    initialSchedule.forEach((flight) => {
        let number = flight.split(" ", 1)[0];
        let destination = flight.split(`${number} `)[1];
        scheduleArray.push(new Flight(number, destination));
    });

    for (const flight of flightChanges) {
        let numberToChange = flight.split(" ").shift();
        let indexToModify = scheduleArray.findIndex(
            (el) => el.number === numberToChange
        );
        if (indexToModify != -1) {
            scheduleArray[indexToModify].number = "Cancelled";
        }
    }

    let arrayToPrint = [];
    switch (statusToCheck) {
        case "Cancelled":
            arrayToPrint = scheduleArray.filter(
                (flight) => flight.number === "Cancelled"
            );
            arrayToPrint.forEach((flight) =>
                console.log(
                    `{ Destination: '${flight.destination}', Status: '${flight.number}' }`
                )
            );
            break;

        default:
            arrayToPrint = scheduleArray.filter(
                (flight) => flight.number != "Cancelled"
            );
            arrayToPrint.forEach((flight) =>
                console.log(
                    `{ Destination: '${flight.destination}', Status: 'Ready to fly' }`
                )
            );
            break;
    }
}
flightSchedule([
    [
        "WN269 Delaware",
        "FL2269 Oregon",
        "WN498 Las Vegas",
        "WN3145 Ohio",
        "WN612 Alabama",
        "WN4010 New York",
        "WN1173 California",
        "DL2120 Texas",
        "KL5744 Illinois",
        "WN678 Pennsylvania",
    ],
    [
        "DL2120 Cancelled",
        "WN612 Cancelled",
        "WN1173 Cancelled",
        "SK430 Cancelled",
    ],
    ["Cancelled"],
]);
