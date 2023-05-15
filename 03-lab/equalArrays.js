function equalArrays(arrayOne, arrayTwo) {
    let areEqual = true;
    let sum = 0;
    let diffIndex;
    for (const index in arrayOne) {
        if (arrayOne[index] === arrayTwo[index]) {
            sum += Number(arrayOne[index]);
        } else {
            areEqual = false;
            diffIndex = index;
            break;
        }
    }
    areEqual
        ? console.log(`Arrays are identical. Sum: ${sum}`)
        : console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
}
equalArrays(['10','20','30'], ['10','20','30'])