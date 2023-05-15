function magicSum(array, number) {
    let numbers = array.slice(0);
    let magicNum = number;
    for (let i = 0; i < numbers.length; i++) {
        let currNum = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            if (currNum + numbers[j] === magicNum) {
            console.log(`${currNum} ${numbers[j]}`);    
            }
        }        
    }
}
magicSum([1, 2, 3, 4, 5, 6],
    6)