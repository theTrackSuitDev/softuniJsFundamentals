function theLift(inputArray) {
    let queue = Number(inputArray.shift());
    let liftArray = inputArray.shift().split(" ");
    liftArray = liftArray.map(Number);
    let allAboard = false;
    let freeLeft = false;

    for (let i = 0; i < liftArray.length; i++) {
        let wagon = liftArray[i];
        if (wagon < 4) {
            let freePlaces = 4 - wagon;
            if (freePlaces < queue) {
                liftArray[i] += freePlaces;
                queue -= freePlaces;
            } else {
                liftArray[i] += queue;
                queue = 0;
                allAboard = true;
                break;
            }
        }  
    }

    let totalPlaces = liftArray.length * 4;
    let placesTaken = liftArray.reduce((a, b) => a + b, 0);
    if (totalPlaces > placesTaken) {
        freeLeft = true;
    }

    if (allAboard && freeLeft) {
        console.log("The lift has empty spots!");
        console.log(liftArray.join(" "));
    }

    if (!allAboard && !freeLeft) {
        console.log(`There isn't enough space! ${queue} people in a queue!`);
        console.log(liftArray.join(" "));
    }

    if (allAboard && !freeLeft) {
        console.log(liftArray.join(" "));
    }
}
theLift([
    "20",
    "0 2 0"
   ])