function searchForNum(arrayOne, arrayTwo) {
    let slicedArray = arrayOne.slice(0, arrayTwo[0]);
    slicedArray.splice(0, arrayTwo[1]);
    let occurrenceCounter = 0;
    slicedArray.forEach((element) => {
        if (element === arrayTwo[2]) {
            occurrenceCounter++;
        }
    });

    console.log(`Number ${arrayTwo[2]} occurs ${occurrenceCounter} times.`);
}
searchForNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3])