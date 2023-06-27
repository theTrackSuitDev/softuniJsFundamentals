function cutAndReverse(inputString) {
    let firstHalf = inputString.slice(0, inputString.length / 2);
    let secondHalf = inputString.slice(inputString.length / 2);

    let firstReversed = firstHalf.split("").reverse().join("");
    let secondReversed = secondHalf.split("").reverse().join("");

    console.log(firstReversed);
    console.log(secondReversed);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')