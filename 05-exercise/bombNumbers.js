function bombNumbers(numArray, bombArray) {
    let bombNum = bombArray[0];
    let bombPower = bombArray[1];

    function detonation(array, num, power) {
        let indexToDetonate = array.findIndex(element => element === num);
        if (indexToDetonate - power  >= 0) {
            array.splice(indexToDetonate - power, power * 2 + 1);
        } else {
            array.splice(0, power * 2 + 1);
        }
    }

    while (numArray.includes(bombNum)) {
        detonation(numArray, bombNum, bombPower);
    }

    let result = numArray.reduce((a, b) => a + b, 0);

    console.log(result);
}
bombNumbers([1, 2, 3, 4],
[2, 2])