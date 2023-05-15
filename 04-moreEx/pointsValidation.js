function pointsValidation(inputArray) {
    let x1 = inputArray[0];
    let y1 = inputArray[1];
    let x2 = inputArray[2];
    let y2 = inputArray[3];

    function distanceBetweenPointsValidation(x1, y1, x2, y2) {
        let xDiff = Math.abs(x1 - x2);
        let yDiff = Math.abs(y1 - y2);
        let distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
        Number.isInteger(distance)
            ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
            : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    distanceBetweenPointsValidation(x1, y1, 0, 0);
    distanceBetweenPointsValidation(x2, y2, 0, 0);
    distanceBetweenPointsValidation(x1, y1, x2, y2);
}
pointsValidation([2, 1, 1, 1])