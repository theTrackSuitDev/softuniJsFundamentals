function rotateArray(input = []) {
    let inputArray = input.slice();
    let rotations = Number(inputArray.pop());
    for (let i = 0; i < rotations; i++) {
        let currentElementToRotate = inputArray.pop();
        inputArray.unshift(currentElementToRotate);
    }
    console.log(inputArray.join(" "));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])