function piccolo(inputArray = []) {
    let parkedCarsObject = {};

    for (const command of inputArray) {
        let [direction, carNumber] = command.split(", ");
        switch (direction) {
            case "IN":
                parkedCarsObject[carNumber] = direction;
                break;

            case "OUT":
                delete parkedCarsObject[carNumber];
                break;
        }
    }

    let parkedCarsArray = Object.entries(parkedCarsObject);
    parkedCarsArray.sort((a, b) => a[0].localeCompare(b[0]));

    if (parkedCarsArray.length > 0) {
        parkedCarsArray.forEach((element) => {
            console.log(element[0]);
        });
    } else {
        console.log("Parking Lot is Empty");
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);
