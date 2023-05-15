function sortThree(numA, numB, numC) {
    let numbersToSort = [numA, numB, numC];
    numbersToSort.sort((a, b) => b - a);

    console.log(numbersToSort[0]);
    console.log(numbersToSort[1]);
    console.log(numbersToSort[2]);
}
sortThree(2, 1, 3)