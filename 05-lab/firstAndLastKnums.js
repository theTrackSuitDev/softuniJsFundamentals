function firstAndLast(inputArray) {
    let numbers = inputArray.slice();
    let k = numbers.shift();
    let first = numbers.slice(0, k);
    let last = numbers.slice(numbers.length - k, numbers.length);
    console.log(first.join(" "));
    console.log(last.join(" "));
}
firstAndLast([2, 
    7, 8, 9])