function needForSpeed(inputArray) {
    class Vehicle {
        constructor(car, mileage, fuel) {
            this.car = car;
            this.mileage = Number(mileage);
            this.fuel = Number(fuel);
        }
    }

    let carsCount = Number(inputArray.shift());
    let carsArray = [];

    for (let i = 0; i < carsCount; i++) {
        let currentCar = inputArray.shift();
        let[car, mileage, fuel] = currentCar.split("|");
        currentCar = new Vehicle(car, mileage, fuel);
        carsArray.push(currentCar);
    }

    let nextCommand = inputArray.shift();
    while (nextCommand !== "Stop") {
        let commandArray = nextCommand.split(" : ");
        let action = commandArray.shift();
        switch (action) {
            case "Drive":
                let carToDrive = commandArray.shift();
                let driveDistance = Number(commandArray.shift());
                let fuelNeeded = Number(commandArray.shift());
                let driveCarIndex = carsArray.findIndex(el => el.car === carToDrive);

                if (carsArray[driveCarIndex].fuel < fuelNeeded) {
                    console.log("Not enough fuel to make that ride");
                } else {
                    carsArray[driveCarIndex].mileage += driveDistance;
                    carsArray[driveCarIndex].fuel -= fuelNeeded;
                    console.log(`${carToDrive} driven for ${driveDistance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                    if (carsArray[driveCarIndex].mileage > 100000) {
                        console.log(`Time to sell the ${carToDrive}!`);
                        carsArray.splice(driveCarIndex, 1);
                    }
                }
                break;
            case "Refuel":
                let carToRefuel = commandArray.shift();
                let refuelAmount = Number(commandArray.shift());
                let refuelIndex = carsArray.findIndex(el => el.car === carToRefuel);

                let litersToFull = 75 - carsArray[refuelIndex].fuel;
                if (litersToFull < refuelAmount) {
                    refuelAmount = litersToFull;
                }

                carsArray[refuelIndex].fuel += refuelAmount;
                console.log(`${carToRefuel} refueled with ${refuelAmount} liters`);
                break;
            case "Revert":
                let carToRevert = commandArray.shift();
                let revertKm = Number(commandArray.shift());
                let revertIndex = carsArray.findIndex(el => el.car === carToRevert);

                carsArray[revertIndex].mileage -= revertKm;
                carsArray[revertIndex].mileage < 10000
                    ? carsArray[revertIndex].mileage = 10000
                    : console.log(`${carToRevert} mileage decreased by ${revertKm} kilometers`);
                break;
        }

        nextCommand = inputArray.shift();
    }

    carsArray.forEach(vehicle => {
        console.log(`${vehicle.car} -> Mileage: ${vehicle.mileage} kms, Fuel in the tank: ${vehicle.fuel} lt.`);
    });
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);