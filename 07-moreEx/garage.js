function garage(inputArray) {
    let garages = {};

    for (const command of inputArray) {
        let commandArray = command.split(" - ");
        let currentGarage = commandArray[0];
        let currentCar = commandArray[1];

        if (garages.hasOwnProperty(currentGarage)) {
            garages[currentGarage].push(currentCar);
        } else {
            garages[currentGarage] = [];
            garages[currentGarage].push(currentCar);
        }
    }

    for (const key in garages) {
        console.log(`Garage № ${key}`);

        for (const car of garages[key]) {
            let carInfo = car.replace(/:/g, " -");
            console.log(`--- ${carInfo}`);
        }
    }
}
garage(
    ['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']  
)