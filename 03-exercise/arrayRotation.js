function arrayRotation(input, n) {
    let numbers = input;
    for (let i = 0; i < n; i++) {
        let firstElement = numbers.shift();
        numbers.push(firstElement);  
    }
    console.log(numbers.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2)