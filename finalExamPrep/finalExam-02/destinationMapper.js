function destinationMapper(inputString) {
    let pattern = /(=|\/)(?<destination>[A-Z]{1}[a-zA-Z]{2,})\1/g;

    let matches = inputString.matchAll(pattern);
    let destinations = [];
    let travelPoints = 0;

    for (const match of matches) {
        destinations.push(match.groups.destination);
        travelPoints += match.groups.destination.length;
    }

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("ThisIs some InvalidInput")