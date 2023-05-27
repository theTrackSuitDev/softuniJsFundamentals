function towns(arrayOfStrings) {
    // class Town {
    //     constructor(name, lat, long) {
    //         this.town = name;
    //         this.latitude = lat;
    //         this.longitude = long;
    //     }
    // }

    // Using classes is inappropriate because when logging 
    // an object which is a class instance with console.log,
    // the returned string starts with the class name. But
    // the Judge system expect an output of logged objects only.

    let townObjectsArray = [];
    for (const townInfo of arrayOfStrings) {
        let [name, latitude, longitude] = townInfo.split(" | ");
        latitude = Number(latitude);
        longitude = Number(longitude);
        let currentTown = {
            town: name,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        };

        townObjectsArray.push(currentTown);
    }

    townObjectsArray.forEach((element) => console.log(element));
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])