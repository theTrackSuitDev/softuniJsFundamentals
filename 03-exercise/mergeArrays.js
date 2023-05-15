function mergeArrays(arrayOne, arrayTwo) {
    let mergedArray = [];
    for (const i in arrayOne) {
        Number(i) % 2 === 0
            ? mergedArray.push(Number(arrayOne[i]) + Number(arrayTwo[i]))
            : mergedArray.push(`${arrayOne[i]}${arrayTwo[i]}`);
    }
    console.log(mergedArray.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])