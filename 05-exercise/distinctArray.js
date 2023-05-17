function distinctArray(input) {
    let numbers = input.slice();
    let result = [];
    for (let i = 0; i < input.length; i++) {
        let currentNum = numbers.shift();
        result.push(currentNum);
        while (numbers.includes(currentNum)) {
            let indexToRemove = numbers.findIndex(
                (el) => el === currentNum
            );
            numbers.splice(indexToRemove, 1)
        }
    }

    console.log(result.join(" "));
    
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]
    )