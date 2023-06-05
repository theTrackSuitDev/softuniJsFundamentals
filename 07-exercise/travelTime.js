function travelTime(inputArray) {
    let countriesArray = [];

    for (const entry of inputArray) {
        let [country, town, cost] = entry.split(" > ");
        cost = Number(cost);

        let current = {
            destination: country
        }

        let countryIndex = countriesArray.findIndex(
            el => el.destination === country
        );

        if (countryIndex === -1) {
            countriesArray.push(current);
            countryIndex = countriesArray.findIndex(
                el => el.destination === country
            );
        } 
       
        if (countriesArray[countryIndex].hasOwnProperty(town)) {
            if (countriesArray[countryIndex][town] > cost) {
                countriesArray[countryIndex][town] = cost;
            }
        } else {
            countriesArray[countryIndex][town] = cost;
        }
    }

    countriesArray.sort((a, b) => a.destination.localeCompare(b.destination));

    for (const country of countriesArray) {
        let currentArray = Object.entries(country);
        let destination = currentArray.shift()[1];
        currentArray.sort((a, b) => a[1] - b[1]);
        let stringResult = `${destination} ->`
        currentArray.forEach(element => {
            let town = element[0];
            let cost = element[1];
            stringResult += ` ${town} -> ${cost}`;
        });
        console.log(stringResult);
    }  
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ])